import type { Coordinates, EventData, NaverMapTypes } from './types';
import geohash from 'ngeohash';
import { PopupString } from '../ui/MarkerPopup';
import { getNearbyEvent } from '@/entities/map';

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
  lat: number,
  lng: number,
  map: naver.maps.Map,
  markersRef: React.MutableRefObject<Map<string, naver.maps.Marker>>
) => {
  const hashes = getGeoHash(lat, lng).neighbors;
  const data: EventData = await getNearbyEvent(hashes);
  const removeZeroLength = Object.values(data)
    .map((events) => Object.values(events))
    .flat()
    .flat();

  removeZeroLength.forEach((event) => {
    const coords = event.geohash;
    const decode = geohash.decode(coords);
    const markerLatitude = decode.latitude;
    const markerLongitude = decode.longitude;
    const positionKey = `${markerLatitude}_${markerLongitude}`;
    if (markersRef.current.has(positionKey)) {
      const existingMarker = markersRef.current.get(positionKey);
      existingMarker?.setMap(null);
    }

    const marker = getMarker(map, markerLatitude, markerLongitude);
    markersRef.current.set(positionKey, marker);

    createMarkerPopup(
      map,
      marker,
      event.eventId,
      event.eventName,
      event.period,
      event.mainImg
    );
  });
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

export const mapEventListener = (
  map: naver.maps.Map,
  currentLocation: Coordinates,
  markersRef: React.MutableRefObject<Map<string, naver.maps.Marker>>
) => {
  naver.maps.Event.addListener(map, 'idle', () => {
    const lat = map.getCenter().y;
    const lng = map.getCenter().x;
    getGeoMarkers(lat, lng, map, markersRef);
  });
};

export const getMapCenter = ({ map }: NaverMapTypes) => {
  let lat;
  let lng;
  if (map) {
    lat = map.getCenter().y;
    lng = map.getCenter().x;
  }
  return { lat, lng };
};
export const getGeoHash = (lat: number, lng: number) => {
  const hash = geohash.encode(lat, lng, 6);
  const neighbors = geohash.neighbors(hash);
  return { hash, neighbors };
};
