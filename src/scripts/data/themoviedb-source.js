import API_ENDPOINT from '../globals/api-endpoint';

class RestaurantSource {
  static async getRestaurants() {
    try {
      const response = await fetch(API_ENDPOINT.NOW_PLAYING);
      const responseJson = await response.json();
      return responseJson.restaurants;
    } catch (error) {
      console.error('Error fetching restaurants:', error);
      return []; // Return an empty array in case of an error
    }
  }

  static async getRestaurantDetail(id) {
    try {
      const response = await fetch(API_ENDPOINT.DETAIL(id));
      const responseJson = await response.json();
      return responseJson.restaurant;
    } catch (error) {
      console.error('Error fetching restaurant detail:', error);
      return null; // Return null in case of an error
    }
  }
}

export default RestaurantSource;
