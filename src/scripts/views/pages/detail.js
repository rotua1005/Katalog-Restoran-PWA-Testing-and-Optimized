import UrlParser from '../../routes/url-parser';
import RestaurantSource from '../../data/themoviedb-source'; // Update import
import { createRestaurantDetailTemplate } from '../templates/template-creator'; // Assuming you have a template for restaurant detail
import LikeButtonInitiator from '../../utils/like-button-initiator';
import scrollTop from '../templates/scroll';

const Detail = {
  async render() {
    return `
      <div id="restaurant" class="restaurant"></div>
      <div id="likeButtonContainer"></div>
      <button aria-label="scroll to top" id="scrollTopButton">Skip</button>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantSource.getRestaurantDetail(url.id);
    const restaurantContainer = document.querySelector('#restaurant');
    restaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurant);

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {
        id: restaurant.id,
        name: restaurant.name,
        description: restaurant.description,
        city: restaurant.city,
        rating: restaurant.rating,
        pictureId: restaurant.pictureId,
      },
    });

    // Panggil scrollTop setelah konten dirender
    scrollTop();
  },
};

export default Detail;
