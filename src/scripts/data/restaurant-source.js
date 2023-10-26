import API_ENDPOINT from '../globals/api-endpoint';

class RestaurantDbSource {
  static async listRestaurant() {
    const response = await fetch(API_ENDPOINT.LIST);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async detailRestaurant(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    const responseJson = response.json();
    return responseJson;
  }

  static async searchRestaurant(value) {
    const response = await fetch(API_ENDPOINT.SEARCH(value));
    const responseJson = response.json();
    return responseJson;
  }

  static async inputReview(newReview) {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newReview),
    };
    const response = await fetch(API_ENDPOINT.REVIEW, options);
    const responseJson = response.json();
    return responseJson;
  }
}

export default RestaurantDbSource;
