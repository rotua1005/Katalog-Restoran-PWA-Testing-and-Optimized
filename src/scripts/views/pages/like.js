/* eslint-disable max-len */
import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import { createRestaurantItemTemplate } from '../templates/template-creator';
import scrollTop from '../templates/scroll';

const Like = {
  async render() {
    return `
    <section id="main" class="hero">
      <div class="hero-container">
        <div class="hero-content">
        <picture>
        <source media="(max-width: 600px)" srcset="./images/hero-image-small.jpg">
        <source media="(max-width: 600px)" srcset="./images/hero-image-small.webp">
        <img class="hero-image lazyload" src="./images/hero-image.jpg" alt="Hero Image">
        </picture>
        </div>
      </div>
    </section>
      <div class="content">
        <h2 class="content__heading">Favorite Restaurants</h2>
        <div id="restaurants" class="restaurants">
        </div>
      </div>
      <button aria-label="scroll to top" id="scrollTopButton">Skip</button>
    `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurants(); // Menggunakan method getAllRestaurants() untuk mengambil data restoran
    const restaurantsContainer = document.querySelector('#restaurants');

    if (restaurants.length > 0) { // Periksa apakah ada restoran yang disukai
      restaurants.forEach((restaurant) => { // Menggunakan createRestaurantItemTemplate untuk membuat template item restoran
        restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
      });
    } else {
      // Tampilkan pesan "no result" jika tidak ada restoran yang disukai
      restaurantsContainer.innerHTML = this._getEmptyDishTemplate();
    }

    // Panggil scrollTop setelah konten dirender
    scrollTop();
  },

  _getEmptyDishTemplate() {
    return '<div id="no_result">Shows no result</div>';
  },
};

export default Like;
