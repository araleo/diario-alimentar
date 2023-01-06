/* eslint-disable no-console */
import mongoose from 'mongoose';

import app from './app';

const mongoUri = process.env.MONGO_URI || '';

mongoose
  .connect(mongoUri)
  .then(() => {
    const port = process.env.PORT || '3001';
    const host = '0.0.0.0';
    app.listen(+port, host, () => {
      console.log(`Listening on: ${port}`);
    });
  })
  .catch(e => {
    console.log(e);
  });
