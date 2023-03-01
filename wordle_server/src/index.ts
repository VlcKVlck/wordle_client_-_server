import config from './config';
import { connect } from './db';
import app from './app';
import { initializeDB } from './users/initializeDB';

async function main() {
  const { db, host, port } = config();

  await connect(db);

  await initializeDB ();

  app.listen(port, host, () => console.log('server is running'));
}

main().catch(console.log);
