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
  map: naver.maps.Map
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
    const marker = getMarker(map, markerLatitude, markerLongitude);
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
  map: naver.maps.Map,
  lat: number,
  lng: number
) => {
  const newCenter = new naver.maps.LatLng(lat, lng);
  console.log(newCenter);
  map.morph(newCenter, 16, {
    easing: 'linear',
  });
  getMarker(map, lat, lng);
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
  currentLocation: Coordinates
) => {
  naver.maps.Event.addListener(map, 'idle', () => {
    const lat = map.getCenter().y;
    const lng = map.getCenter().x;
    const currentLat = currentLocation.latitude;
    const currentLng = currentLocation.longitude;

    //const geo = geohash.encode(lat, lng);
    // const curGeo = geohash.encode(currentLat, currentLng);

    console.log(lat, currentLat);
    if (currentLat !== lat && currentLng !== lng) {
      getGeoMarkers(lat, lng, map);
    }
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
