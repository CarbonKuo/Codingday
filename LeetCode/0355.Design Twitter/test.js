'use strict';

const assert = require('assert');
const { Twitter } = require('./');

describe('#Twitter', () => {
  it('should work', () => {
    const twitter = new Twitter();
    twitter.postTweet(1, 5);
    assert.deepStrictEqual(twitter.getNewsFeed(1), [5]); // returns [5]
    twitter.follow(1, 2);
    twitter.postTweet(2, 6);
    assert.deepStrictEqual(twitter.getNewsFeed(1), [6, 5]); // returns [6, 5]
    twitter.unfollow(1, 2);
    assert.deepStrictEqual(twitter.getNewsFeed(1), [5]); // returns [5]
  });
});
