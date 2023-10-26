import CONFIG from '../../globals/config';

const createRestaurantTemplate = (restaurants) => `
                <article class="post-item">
                  <img 
                    class="post-item__thumbnail lazyload"
                    data-src="${CONFIG.BASE_IMAGE_URL + restaurants.pictureId}"
                    alt="Restaurant picture"
                  >
                  <h2 tabindex="0" class="post-item__city">${restaurants.city}</h2>
                  <div class="post-item__content">
                    <h1 tabindex="0" class="post-item__title">
                      <b><a href="#/detail/${restaurants.id}">${restaurants.name}</a></b>
                    </h1>
                    <div class="rating">
                      <i class="fas fa-star"></i>${restaurants.rating}
                    </div>
                    <p  tabindex="0"  class="post-item__description">
                    ${restaurants.description}
                    </p>
                  </div>
                </article>
                `;

const createRestaurantDetailTemplate = (restaurant) => `
                  <div class="resto-img">
                    <img 
                      class="lazyload"
                      data-src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}"
                      alt="Restaurant picture"
                    >
                  </div>
                  <div class="detail-content">
                      <h1 tabindex="0" class="">
                        <b>${restaurant.name}</b>
                      </h1>
                      <div class="address-content">
                      <h2 tabindex="0" class="city">${restaurant.city}</h2>
                      <p>${restaurant.address}</p>
                    </div>
                    <div class="rating-content">
                      <i class="fas fa-star"></i>
                      <p>${restaurant.rating}</p>
                    </div>
                    <p  tabindex="0"  class="description-content">
                      ${restaurant.description}
                    </p>
                  </div>
                `;

const categoryTemplate = (categories) => {
  let categorycontent = '<ul>';
  categories.forEach((category) => {
    categorycontent += `<li><p>${category.name}</p></li>`;
  });
  categorycontent += '</ul>';
  return categorycontent;
};

const foodsTemplate = (foods) => {
  let foodcontent = '<ul>';
  foods.forEach((food) => {
    foodcontent += `<li><p>${food.name}</p></li>`;
  });
  foodcontent += '</ul>';
  return foodcontent;
};

const drinksTemplate = (drinks) => {
  let drinkcontent = '<ul>';
  drinks.forEach((drink) => {
    drinkcontent += `<li><p>${drink.name}</p></li>`;
  });
  drinkcontent += '</ul>';
  return drinkcontent;
};

const reviewTemplate = (customerReviews) => {
  let reviewContent = '';
  customerReviews.forEach((review) => {
    reviewContent += `
    <div class="review-item">
    <p class="reviewer_name">Nama: ${review.name}</p>
    <p class="reviewer_comment">Review: ${review.review}</p>
    <p>Tanggal: ${review.date}</p>
    </div>`;
  });

  return reviewContent;
};

const createLikeButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantTemplate,
  createRestaurantDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
  categoryTemplate,
  foodsTemplate,
  drinksTemplate,
  reviewTemplate,
};
