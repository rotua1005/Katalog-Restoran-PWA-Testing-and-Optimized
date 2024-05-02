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
            <source media="(max-width: 600px)" srcset="./images/hero-image-small.jpg">
            <source media="(max-width: 600px)" srcset="./images/hero-image-small.webp">
            <img class="hero-image lazyload" src="./images/hero-image.jpg" alt="Hero Image">
            </picture>
        </div>
      </div>
    </section>
    <div class="content">
      <h2 class="content__heading">List of Restaurants</h2>
      <div id="restaurants" class="restaurants"></div>
    </div>
    <button aria-label="scroll to top" id="scrollTopButton">Skip</button>
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
