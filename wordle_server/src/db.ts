import pkg from 'pg';
import config from './config';

const { Client } = pkg;
let client = new Client();
const database = config().db.database;

// this function is not testable
export async function connect({ user, host, database, password }): Promise<void> {
  const c = new Client({ user, host, database, password });
  console.log('pg client created');
  await c.connect();
  console.log('pg client connected');
  client = c;
}

export default function db() {
  if (client.database !== database) {
    throw new Error('you have to connect before calling this function');
  }
  return client;
}
