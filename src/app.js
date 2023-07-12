import express, { json } from 'express';
import routes from './routes/index.js';
import db from './db.js';

const app = express();

app.use(json());
app.use('/', routes);

app.get('/', async (req, res) => {
  try {
    const data = await db.execute('SELECT * FROM user');
    console.log(data);
    res.send(data);
  } catch (error) {
    console.log(error);
    res.send({ error: 'Error' });
  }
});

export default app;
