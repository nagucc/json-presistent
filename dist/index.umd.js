(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('babel-polyfill'), require('redis')) :
  typeof define === 'function' && define.amd ? define(['babel-polyfill', 'redis'], factory) :
  (factory(global.babelPolyfill,global.redis));
}(this, function (babelPolyfill,redis) { 'use strict';

  var redisUrl = process.env.REDIS_URL || 'redis://localhost:6379';

  var client = redis.createClient(redisUrl);
  client.on('error', function (err) {
    console.log('Error: ' + err);
  });

  client.set('test_xxxxx', 'first test value');
  client.get('test_xxxxx', function (err, value) {
    console.log(value);
  });

  client.quit();

}));
//# sourceMappingURL=index.umd.js.map