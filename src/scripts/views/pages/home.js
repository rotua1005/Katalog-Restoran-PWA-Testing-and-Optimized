import RestaurantSource from '../../data/themoviedb-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';
import scrollTop from '../templates/scroll';

const Home = {
  async render() {
    return `
    <section id="main" class="hero">
      <div class="hero-container">
        <div class="hero-content">
          <picture>
            <source media="(max-width: 600px)" srcset="./images/hero-image-small.webp" type="image/webp">
            <source media="(max-width: 600px)" srcset="./images/hero-image-small.jpg" type="image/jpeg">
            <source srcset="./images/hero-image-large.webp" type="image/webp">
            <source srcset="./images/hero-image-large.jpg" type="image/jpeg">
            <img class="hero-image lazyload" data-src="./images/hero-image-large.jpg" alt="Hero Image" loading="lazy">
          </picture>
        </div>
      </div>
    </section>
    <div class="content">
      <h2 class="content__heading">List of Restaurants</h2>
      <div id="restaurants" class="restaurants"></div>
    </div>
    <button aria-label="scroll to top" id="scrollTopButton">Top</button>
    `;
  },

  async afterRender() {
    const restaurants = await RestaurantSource.getRestaurants();
    const restaurantsContainer = document.querySelector('#restaurants');
    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
    scrollTop();
  },
};

export default Home;
