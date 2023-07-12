import express, { json } from 'express';
import db from './db.js';

const app = express();

app.use(json());

app.get('/', async (req, res) => {
  try {
    const [cols, fields] = await db.execute('SELECT NOW()');
    console.log(cols, fields);
    res.send(cols);
  } catch (error) {
    console.log(error);
    res.send({ error: 'Error al solicitar la información a la base de datos.' });
  }
});

export default app;
