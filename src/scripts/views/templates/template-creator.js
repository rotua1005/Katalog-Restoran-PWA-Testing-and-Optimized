// template-creator.js

import CONFIG from '../../globals/config';

const createRestaurantDetailTemplate = (restaurant) => `
  <div class="restaurant-detail">
    <h2 class="restaurant__title">${restaurant.name}</h2>
    <br>
    <picture>
      <source type="image/webp" srcset="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}">
      <source type="image/jpeg" srcset="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}">
      <img class="restaurant__poster lazyload" src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}" loading="lazy">
    </picture>
    <div class="restaurant__info">
      <p>City: ${restaurant.city}</p>
      <p>Address: ${restaurant.address}</p>
      <h3>Description</h3>
      <p>${restaurant.description}</p>
      <h3>Menus</h3>
      <div class="restaurant__menus">
        <h4>Foods</h4>
        <ul>
          ${restaurant.menus.foods.map((food) => `<li>${food.name}</li>`).join('')}
        </ul>
        <h4>Drinks</h4>
        <ul>
          ${restaurant.menus.drinks.map((drink) => `<li>${drink.name}</li>`).join('')}
        </ul>
      </div>
      <h3>Customer Reviews</h3>
      <div class="restaurant__reviews">
        ${restaurant.customerReviews.map((review) => `
          <div class="review">
            <p><strong>${review.name}</strong></p>
            <p>${review.review}</p>
            <p>Date: ${review.date}</p>
          </div>
        `).join('')}
      </div>
    </div>
  </div>
`;

const createRestaurantItemTemplate = (restaurant) => `
  <div class="restaurant-item">
    <div class="restaurant-item__header">
    <picture>
    <source type="image/webp" srcset="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}">
    <source type="image/jpeg" srcset="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}">
    <img class="restaurant-item__header__poster lazyload" alt="${restaurant.name}" src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" loading="lazy">
  </picture>
      <div class="restaurant-item__header__rating">
        <p>⭐️
          <span class="restaurant-item__header__rating__score">${restaurant.rating}</span>
        </p>
      </div>
    </div>
    <div class="restaurant-item__content">
    <h3 class="restaurant__title"><a href="/#/detail/${restaurant.id}">${restaurant.name}</a></h3>
      <p>${restaurant.description}</p>
      <p>City: ${restaurant.city}</p>
    </div>
  </div>
`;

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
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
