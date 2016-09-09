import 'babel-polyfill';
import { createClient } from 'redis';

var redisUrl = process.env.REDIS_URL || 'redis://localhost:6379';

var client = createClient(redisUrl);
client.on('error', function (err) {
  console.log('Error: ' + err);
});

client.set('test_xxxxx', 'first test value');
client.get('test_xxxxx', function (err, value) {
  console.log(value);
});

client.quit();
//# sourceMappingURL=index.es6.js.map