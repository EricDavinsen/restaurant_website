import RestaurantDbSource from '../../data/restaurant-source';
import { createRestaurantTemplate } from '../templates/templates-creator';
import './search-bar';

const MainPage = {
  async render() {
    return `
    <div class="latest">
      <h1 tabindex="0" class="latest__label">Explore Restaurant</h1>
      <div class="loading_container">
      <div class="loader"></div>
    </div>
      <div id="posts" class="posts"></div>
    </div>
      `;
  },

  async afterRender() {
    const loading = document.querySelector('.loading_container');
    loading.style.display = 'flex';
    const restaurants = await RestaurantDbSource.listRestaurant();
    if (restaurants.length !== 0) {
      loading.style.display = 'none';
      // eslint-disable-next-line prefer-const
      let restaurantContainer = document.querySelector('#posts');
      restaurants.forEach((restaurant) => {
        restaurantContainer.innerHTML += createRestaurantTemplate(restaurant);
      });

      const searchElement = document.querySelector('search-bar');
      const searchButton = async () => {
        const restaurantSearch = await RestaurantDbSource.searchRestaurant(
          searchElement.value,
        );
        restaurantContainer.innerHTML = '';

        if (restaurantSearch.restaurants.length === 0) {
          restaurantContainer.innerHTML += `<h1> Restaurant ${searchElement.value} tidak ditemukan. </h1>`;
        }

        restaurantSearch.restaurants.forEach((item) => {
          restaurantContainer.innerHTML += createRestaurantTemplate(item);
        });
      };
      searchElement.clickEvent = searchButton;
    }
  },
};

export default MainPage;
