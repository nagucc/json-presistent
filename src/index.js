
/*
eslint-disable no-console
 */

import 'babel-polyfill';
import { redisUrl } from './config';
import { createClient } from 'redis';

const client = createClient(redisUrl);
client.on('error', err => {
  console.log(`Error: ${err}`);
});

client.set('test_xxxxx', 'first test value');
client.get('test_xxxxx', (err, value) => {
  console.log(value);
});

client.quit();
