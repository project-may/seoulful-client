import type { Coordinates, EventData } from './types';
import geohash from 'ngeohash';
import { PopupString } from '../ui/MarkerPopup';
import { getNearbyEvent } from '@/entities/map';
import { MutableRefObject } from 'react';

export const getNaverMap = ({ latitude, longitude }: Coordinates) => {
  const mapOptions = {
    center: new naver.maps.LatLng(latitude, longitude),
    zoomControl: true,
    zoomControlOptions: {
      style: naver.maps.ZoomControlStyle.SMALL,
      position: naver.maps.Position.RIGHT_CENTER,
    },
    zoom: 16,
  };
  const map = new naver.maps.Map('map', mapOptions);

  return map;
};

export const getMarker = (map: naver.maps.Map, lat: number, lng: number) => {
  return new naver.maps.Marker({
    position: new naver.maps.LatLng(lat, lng),
    map: map,
  });
};

export const getGeoMarkers = async (
  map: naver.maps.Map,
  markersRef: MutableRefObject<Map<string, naver.maps.Marker>>,
  geohashRef: MutableRefObject<string | undefined>
) => {
  const newLatitude = map.getCenter().y;
  const newLongitude = map.getCenter().x;
  const { hash, neighbors } = getGeoHash(newLatitude, newLongitude);
  if (geohashRef?.current !== hash || markersRef.current.size === 0) {
    const data: EventData = await getNearbyEvent(neighbors);
    geohashRef.current = hash;

    const eventArray = Object.entries(data).filter(([key, event]) => {
      if (event.length > 0) {
        return [key, event];
      }
    });

    eventArray.forEach(([key, eventArr]) => {
      eventArr.forEach((event) => {
        const uniqueKey = `${key}_${event}`;
        if (!markersRef.current.has(uniqueKey)) {
          const marker = new naver.maps.Marker({
            position: new naver.maps.LatLng(event.latitude, event.longitude),
            map: map,
          });
          if (!marker.getMap()) {
            marker.setMap(null);
          } else {
            marker.setMap(map);
          }
          markersRef.current.set(uniqueKey, marker);
          createMarkerPopup(
            map,
            marker,
            event.eventId,
            event.eventName,
            event.period,
            event.mainImg
          );
        }
      });
    });
  }
};

export const createMarkerPopup = (
  map: naver.maps.Map,
  marker: naver.maps.Marker,
  eventId: number,
  eventName: string,
  period: string,
  mainImg: string
) => {
  const popup = PopupString({ eventId, eventName, period, mainImg });
  const infowindow = new naver.maps.InfoWindow({
    content: popup,
    borderWidth: 0,
    disableAnchor: true,
    disableAutoPan: true,
    maxWidth: 120,
  });
  naver.maps.Event.addListener(marker, 'click', function () {
    if (infowindow.getMap()) {
      infowindow.close();
    } else {
      infowindow.open(map, marker);
    }
  });
};

export const mapCurrentPosition = (
  map: naver.maps.Map | null,
  lat: number,
  lng: number
) => {
  const newCenter = new naver.maps.LatLng(lat, lng);
  let marker: naver.maps.Marker | null = null;
  if (map) {
    map.setCenter(newCenter);
    marker = getMarker(map, lat, lng);
  }
  return marker;
};

export const geoCurrentPosition = async (): Promise<Coordinates> => {
  if (!navigator.geolocation) {
    throw new Error('Geolocation is not supported by this browser.');
  }

  return new Promise<Coordinates>((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        resolve({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      },
      (error) => {
        reject(error);
      }
    );
  });
};

export const getGeoHash = (lat: number, lng: number) => {
  const hash = geohash.encode(lat, lng, 6);
  const neighbors = geohash.neighbors(hash);
  return { hash, neighbors };
};
