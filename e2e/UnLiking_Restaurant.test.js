/* eslint-disable no-undef */
const assert = require('assert');

Feature('Unliking Rm.Mahkota');

Before(({ I }) => {
  I.amOnPage('/#/like');
});

Scenario('unliking a liked Rm.Mahkota', async ({ I }) => {
  // Menunggu elemen '#no_result' muncul sebelum memeriksa
  I.waitForElement('#no_result');
  I.see('Shows no result', '#no_result');

  I.amOnPage('/');

  // Menunggu elemen '.restaurant__title a' muncul sebelum memeriksa dan melakukan tindakan
  I.waitForElement('.restaurant__title a');
  I.seeElement('.restaurant__title a');
  const sampleDish = locate('.restaurant__title a').first();
  const sampleDishTitle = await I.grabTextFrom(sampleDish);
  I.click(sampleDish);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/like');
  // Menunggu elemen '.restaurant-item' muncul sebelum memeriksa
  I.waitForElement('.restaurant-item');
  I.seeElement('.restaurant-item');
  const likedDishTitle = await I.grabTextFrom('.restaurant__title a');

  assert.strictEqual(sampleDishTitle, likedDishTitle);

  // Unliking the restaurant
  I.click(locate('.restaurant__title a').first());

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/like');
  // Menunggu elemen '#no_result' muncul sebelum memeriksa
  I.waitForElement('#no_result');
  I.see('Shows no result', '#no_result');
});
