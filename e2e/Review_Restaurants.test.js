/* eslint-disable no-undef */
const assert = require('assert');

Feature('Review Restaurant');

Before(({ I }) => {
  I.amOnPage('/');

  I.click(locate('.post-item__content .post-item__title a').at(3));
});

Scenario('Reviewing a Restaurant', async ({ I }) => {
  const name = 'Valpray';
  const review = 'Mantap jiwa';

  I.wait(3);
  I.seeElement('.content_review');

  I.wait(3);
  I.fillField('#inputName', name);
  I.fillField('#inputReview', review);
  I.click('#reviewButton');

  I.wait(3);
  const newName = await I.grabTextFrom(
    locate('#reviewContainer .reviewer_name').last(),
  );
  const newReview = await I.grabTextFrom(
    locate('#reviewContainer .reviewer_comment').last(),
  );
  I.wait(3);
  assert.strictEqual(`Nama: ${name}`, newName);
  assert.strictEqual(`Review: ${review}`, newReview);
});
