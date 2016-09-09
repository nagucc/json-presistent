
import 'babel-polyfill';
import { expect } from 'chai';
import redisPersistent from '../src/redis';

describe('Redis Json Persistent', () => {
  it('set & get value, and remove key', async () => {
    const key = Math.random().toString();
    const { set, get, remove } = redisPersistent('redis://localhost:6379');

    // set & get value
    await set(key, 'value');
    let value = await get(key);
    expect(value).to.be.eql('value');

    // remove key
    await remove(key);
    value = await get(key);
    expect(value).to.be.eql(null);
  });
});
