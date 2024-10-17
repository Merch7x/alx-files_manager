import { createClient } from 'redis';

class RedisClient {
  constructor() {
    this.myClient = createClient();
    this.myClient.on('error', (error) => console.log(error));
    this.myClient.connect().catch(console.error);
  }

  isAlive() {
    return this.myClient.isReady;
  }

  async get(key) {
    return this.myClient.get(key);
  }

  async set(key, val, time) {
    return this.myClient.set(key, val, { EX: time });
  }

  async del(key) {
    return this.myClient.del(key);
  }
}

const redisClient = new RedisClient();

export default redisClient;
