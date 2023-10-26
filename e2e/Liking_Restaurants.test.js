const assert = require('assert');
/* eslint-disable no-undef */
Feature('Liking Restaurants');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});
Scenario('showing empty liked restaurants', ({ I }) => {
  I.see('Empty Restaurant', '.empty_restaurant');
});

Scenario('liking and unliking one restaurant', async ({ I }) => {
  I.see('Empty Restaurant', '.empty_restaurant');
  I.amOnPage('/');

  I.wait(3);
  I.seeElement('.post-item__content .post-item__title a');
  const firstRestaurant = locate('.post-item__content .post-item__title a').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.wait(3);
  I.click(firstRestaurant);
  I.wait(3);

  I.seeElement('#likeButton');
  I.click('#likeButton');
  I.wait(3);

  I.amOnPage('/#/favorite');
  I.wait(3);
  I.seeElement('.latest');

  I.wait(3);
  const likedRestaurantTitle = await I.grabTextFrom('.post-item__content .post-item__title a');

  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);

  const firstRestaurantLike = locate('.post-item__content .post-item__title a').first();

  I.click(firstRestaurantLike);
  I.seeElement('#likeButton');
  I.click('#likeButton');
  I.wait(3);
  I.amOnPage('/#/favorite');
  I.wait(3);
  I.seeElement('.empty_restaurant');
  const onFavorite = await I.grabTextFrom('.empty_restaurant');
  assert.strictEqual(onFavorite, 'Empty Restaurant');
});
