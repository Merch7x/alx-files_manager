import express from 'express';
import 'dotenv/config';
import routes from './routes/index.js';

const app = express();
const port = process.env.PORT || 5000;


app.use('/', routes);


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
