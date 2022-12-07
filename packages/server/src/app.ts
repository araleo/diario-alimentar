import express from 'express';

const app = express();

app.get('/', (req, res) => {
  return res.json({ message: 'Hello world' });
});

app.listen(3001, () => {
  console.log('Listening on port 3001');
});
