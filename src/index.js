import 'babel-polyfill';
import express from 'express';
import renderer from './helpers/renderer';
import createStoreUtility from './helpers/createStore';

const app = express();

app.use(express.static('public'));
app.get('*', (req, res) => {
  const store = createStoreUtility();
  res.send(renderer(req, store));
});

app.listen(3000, () => {
  console.log('Listening on Port 3000');
});
