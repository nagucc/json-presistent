/*
eslint-disable no-console
 */

import { createClient } from 'redis';

const errorHandler = err => {
  console.log(`[json-presistent]Redis Error: ${err}`);
};


export default (redisUrl, options) => {
  let client;
  return {
    set: (key, val) =>
      new Promise((resolve, reject) => {
        client = createClient(redisUrl, options);
        client.on('error', errorHandler);

        client.set(key, val, err => {
          if (err) {
            reject(err);
          } else {
            resolve();
          }
          client.quit();
        });
      }),
    get: key =>
      new Promise((resolve, reject) => {
        client = createClient(redisUrl);
        client.on('error', errorHandler);

        client.get(key, (err, value) => {
          if (err) {
            reject(err);
          } else {
            resolve(value);
          }
          client.quit();
        });
      }),
    remove: key =>
      new Promise((resolve, reject) => {
        client = createClient(redisUrl, options);
        client.on('error', errorHandler);

        client.del(key, err => {
          if (err) {
            reject(err);
          } else {
            resolve();
          }
          client.quit();
        });
      }),
  };
};
