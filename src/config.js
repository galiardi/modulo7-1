import { config } from 'dotenv';
config();

const PORT = process.env.PORT;

const DB_HOST = process.env.DB_HOST;
const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_DATABASE = process.env.DB_DATABASE;
const DB_PORT = process.env.DB_PORT;

export { PORT, DB_HOST, DB_USER, DB_PASSWORD, DB_DATABASE, DB_PORT };
