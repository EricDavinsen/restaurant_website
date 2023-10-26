import UrlParser from '../../routes/url-parser';
import RestaurantDbSource from '../../data/restaurant-source';
import LikeButtonInitiator from '../../utils/like-button-initiator';
import {
  createRestaurantDetailTemplate,
  categoryTemplate,
  foodsTemplate,
  drinksTemplate,
  reviewTemplate,
} from '../templates/templates-creator';

const Detail = {
  async render() {
    return `
    <div class="latest">
      <h1 tabindex="0" class="latest__label">Detail Restaurant</h1>
      <div id="posts" class="detail_posts">
      </div>
      <div class="content_detail">
        <div id="categoryContainer" class="post-item__categories">
        <h1 class="category_title">Category </h1>
        </div>
        <div id="foodContainer" class="post-item__foods">
         <h1 class="category_title">Foods </h1>
        </div>
        <div id="drinksContainer" class="post-item__drinks">
          <h1 class="category_title">Drinks </h1>
        </div>
      </div>
    <h1 tabindex="0" class="latest__label">Review Restaurant</h1>
    <div class = "content_review">
    <label><h1>Nama </h1></label>
    <input
    placeholder=" Enter your name"
    id="inputName"
    type="input"
  />
  <label><h1>Review </h1></label>
    <input
    placeholder=" Enter your review"
    id="inputReview"
    type="input"
  />
    <button id="reviewButton" type="submit">Submit</button>
    <h1 class="category_reviews">Reviews: </h1>
    <div id="reviewContainer" class="post-item__reviews"></div>
  </div>
  <div id="likeButtonContainer"></div>
      `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurants = await RestaurantDbSource.detailRestaurant(url.id);
    const detailContainer = document.querySelector('#posts');
    detailContainer.innerHTML = createRestaurantDetailTemplate(
      restaurants.restaurant,
    );

    const category = document.querySelector('#categoryContainer');
    category.innerHTML += categoryTemplate(restaurants.restaurant.categories);

    const foods = document.querySelector('#foodContainer');
    foods.innerHTML += foodsTemplate(restaurants.restaurant.menus.foods);

    const drinks = document.querySelector('#drinksContainer');
    drinks.innerHTML += drinksTemplate(restaurants.restaurant.menus.drinks);

    const reviews = document.querySelector('#reviewContainer');
    reviews.innerHTML += reviewTemplate(restaurants.restaurant.customerReviews);

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {
        id: restaurants.restaurant.id,
        name: restaurants.restaurant.name,
        pictureId: restaurants.restaurant.pictureId,
        city: restaurants.restaurant.city,
        rating: restaurants.restaurant.rating,
        description: restaurants.restaurant.description,
      },
    });

    document.getElementById('reviewButton').addEventListener('click', async () => {
      const inputName = document.querySelector('#inputName').value;
      const inputReview = document.querySelector('#inputReview').value;
      const newReview = {
        id: url.id.toString(),
        name: inputName,
        review: inputReview,
      };
      const inputNewReview = await RestaurantDbSource.inputReview(newReview);
      location.reload();
      console.log(inputNewReview);
    });
  },
};

export default Detail;
