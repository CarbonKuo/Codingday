'use strict';

var Twitter = function () {
  this.userIdList = [];
  this.newsFeedArr = [];
};

/**
 * @param {number} userId
 * @param {number} tweetId
 * @return {void}
 */
Twitter.prototype.postTweet = function (userId, tweetId) {
  if (!this.userIdList[userId]) {
    this.userIdList[userId] = [userId];
  }
  this.newsFeedArr.unshift([userId, tweetId]);
};

/**
 * @param {number} userId
 * @return {number[]} list
 */
Twitter.prototype.getNewsFeed = function (userId) {
  let list = [];
  let followees = this.userIdList[userId];
  if (followees) {
    list = this.newsFeedArr
      .map((item) => {
        if (followees.indexOf(item[0]) !== -1) {
          return item[1];
        }
      })
      .filter((item) => item)
      .slice(0, 10);
  }
  return list;
};

/**
 * @param {number} followerId
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.follow = function (followerId, followeeId) {
  if (!this.userIdList[followerId]) {
    this.userIdList[followerId] = [followerId, followeeId];
  } else {
    this.userIdList[followerId].push(followeeId);
  }
};

/**
 * @param {number} followerId
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.unfollow = function (followerId, followeeId) {
  if (
    this.userIdList[followerId] &&
    this.userIdList[followerId].indexOf(followeeId) !== -1 &&
    followerId !== followeeId
  ) {
    let index = this.userIdList[followerId].indexOf(followeeId);
    this.userIdList[followerId].splice(index, 1);
  }
};

module.exports = { Twitter };
