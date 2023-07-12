import { createConnection } from 'mysql2/promise';
import { DB_DATABASE, DB_HOST, DB_PASSWORD, DB_PORT, DB_USER } from './config.js';

// const db = await createConnection({
//   host: DB_HOST,
//   user: DB_USER,
//   password: DB_PASSWORD,
//   port: DB_PORT,
//   database: DB_DATABASE,
// });

const db = await createConnection(
  `mysql://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_DATABASE}`
);

export default db;
