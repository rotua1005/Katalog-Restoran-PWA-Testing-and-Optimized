/* eslint-disable no-undef */
const assert = require('assert');
 
Feature('Liking Rm.Mahkota');
 
Before(({ I }) => {
  I.amOnPage('/#/like');
});
 
Scenario('showing empty liked Rm.Mahkota', async ({ I }) => {
  // Menunggu elemen '#no_result' muncul sebelum memeriksa
  I.waitForElement('#no_result');
  I.see('Shows no result', '#no_result');
});
 
Scenario('liking one Rm.Mahkota', async ({ I }) => {
  // Menunggu elemen '#no_result' muncul sebelum memeriksa
  I.waitForElement('#no_result');
  I.see('Shows no result', '#no_result');

  I.amOnPage('/');
 
  // Menunggu elemen '.restaurant__title a' muncul di DOM
  I.waitForElement('.restaurant__title a');

  const sampleDish = locate('.restaurant__title a').first();
  const sampleDishTitle = await I.grabTextFrom(sampleDish);
  I.click(sampleDish);
 
  I.seeElement('#likeButton');
  I.click('#likeButton');
 
  I.amOnPage('/#/like');
  // Menunggu elemen '.restaurant-item' muncul sebelum memeriksa
  I.waitForElement('.restaurant-item');
  I.seeElement('.restaurant-item');
  
  // Menggunakan 'locate' untuk menemukan elemen dengan text yang sesuai
  const likedDishTitle = await I.grabTextFrom(locate('.restaurant__title a').first());
 
  assert.strictEqual(sampleDishTitle, likedDishTitle);
});
