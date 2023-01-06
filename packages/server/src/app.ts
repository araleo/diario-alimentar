import bodyParser from 'body-parser';
import compression from 'compression';
import cors from 'cors';
import express from 'express';
import helmet from 'helmet';
import {
  initializeApp as initializeFirebase,
  applicationDefault,
} from 'firebase-admin/app';

import mealsRoutes from './routes/meals';
import errMiddleware from './middlewares/error';
import notFoundMiddleware from './middlewares/notfound';
import { CORS_CONFIG } from './config/app';

initializeFirebase({ credential: applicationDefault() });

const app = express();

if (process.env.NODE_ENV !== 'production') {
  app.use(cors(CORS_CONFIG));
}

app.use(helmet());

app.use(compression());

app.use(bodyParser.json());

app.get('', (_, res) => res.json({ message: 'Hello world' }));

app.use('/meals', mealsRoutes);

app.use(notFoundMiddleware);

app.use(errMiddleware);

export default app;
