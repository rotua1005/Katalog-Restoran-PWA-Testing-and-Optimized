/* eslint-disable no-undef */
const assert = require('assert');

Feature('Liking Rm.Mahkota');

Before(({ I }) => {
  I.amOnPage('/#/like');
});

Scenario('showing empty liked Rm.Mahkota', ({ I }) => {
  I.see('Shows no result', '#no_result');
});

Scenario('liking one Rm.Mahkota', async ({ I }) => {
  I.see('Shows no result', '#no_result');
  I.amOnPage('/');

  I.seeElement('.restaurant__title a');
  const sampleDish = locate('.restaurant__title a').first();
  const sampleDishTitle = await I.grabTextFrom(sampleDish);
  I.click(sampleDish);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/like');
  I.seeElement('.restaurant-item');
  const likedDishTitle = await I.grabTextFrom('.restaurant__title a');

  assert.strictEqual(sampleDishTitle, likedDishTitle);
});
