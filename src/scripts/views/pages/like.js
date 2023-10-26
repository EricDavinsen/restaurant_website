import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import { createRestaurantTemplate } from '../templates/templates-creator';

const Like = {
  async render() {
    return `
      <div class="latest">
      <h1 tabindex="0" class="latest__label">Favorite Restaurant</h1>
        <div id="posts" class="posts">
        </div>
        <h1 class="empty_restaurant">Empty Restaurant</h1>
      </div>
    `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
    const empty = document.querySelector('.empty_restaurant');
    empty.style.display = 'block';
    if (restaurants.length !== 0) {
      empty.style.display = 'none';
      const restaurantContainer = document.querySelector('#posts');
      restaurants.forEach((restaurant) => {
        restaurantContainer.innerHTML += createRestaurantTemplate(restaurant);
      });
    }
  },
};

export default Like;
