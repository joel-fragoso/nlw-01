import express from 'express';
import cors from 'cors';
import path from 'path';
import morgan from 'morgan';
import routes from './routes';
import { errors } from 'celebrate';

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(routes);

app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));

app.use(errors());

app.listen(3333, () => {
  console.log('> Server started on: http://192.168.1.26:3333');
});
