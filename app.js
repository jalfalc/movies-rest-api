// TODO: set up the Express server here

import express, { json } from 'express';
import { moviesRouter } from './routes/MovieRouter.js';

const app = express();
app.use(json());
app.disable('x-powered-by');

app.use('/movies', moviesRouter)
app.get('/', (req, res) => {
  res.send('Welcome to the Movies API');
});

const PORT = process.env.PORT ?? 3000;

app.listen(PORT, () => {
  console.log(`Server is running on  http://localhost:${PORT}`);

});
