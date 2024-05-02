import CONFIG from './config';

const API_ENDPOINT = {
  NOW_PLAYING: `${CONFIG.BASE_URL}list`, // Endpoint to get the list of restaurants
  UPCOMING: '', // No need to change this since it's not used
  DETAIL: (id) => `${CONFIG.BASE_URL}detail/${id}`, // Endpoint to get the detail of a restaurant
};

export default API_ENDPOINT;
