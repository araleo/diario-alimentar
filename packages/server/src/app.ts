import express from 'express';

const app = express();

app.get('/', (_, res) => res.json({ message: 'Hello world' }));

app.listen(3001, () => console.log('Listening on port 3001'));
