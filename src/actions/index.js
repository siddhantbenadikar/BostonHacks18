import axios from 'axios';
import {SECRETS} from '../secrets'


const ROOT_URL_GOOGLE = `https://maps.googleapis.com/maps/api/geocode/json?key=${SECRETS.GOOGLE_API_KEY}`;
const ROOT_URL_SOLARIS = `https://apis.solarialabs.com/shine/v1/parking-rules/meters?apikey=${SECRETS.SOLARIS_API_KEY}`;

export const FETCH_COORD = 'FETCH_COORD';
export const FETCH_METER = 'FETCH_METER';

export function fetchCoord(address) {
    address = address.replace(" ", "+");
    const url1 = `${ROOT_URL_GOOGLE}&address=${address}`;

    const request = axios.get(url1)
        .then((response) => {
            const data = response.data;
            const lat = data.results[0].geometry.location.lat;
            const lng = data.results[0].geometry.location.lng;
            const url2 = `${ROOT_URL_SOLARIS}&lat=${lat}&long=${lng}&max-distance=1000&max-results=10`;
            return axios.get(url2); // using response.data
        });

    return {
        type: FETCH_COORD,
        payload: request
    };
}

export function fetchMeters(lat, lng) {
    const url = `${ROOT_URL_SOLARIS}&lat=${lat}&long=${lng}&max-distance=1000&max-results=10`;
    const request = axios.get(url);
    return {
        type: FETCH_METER,
        payload: request
    }
}
