import express from 'express';
import { products } from './data/products.js';
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/api/v1/products', (req, res) => {
  res.status(200).json(products);
});

app.get('/api/v1/products/:id', (req, res) => {
  const product = products.find((p) => p.id === req.params.id);
  res.status(200).json(product);
});

app.listen(5100, () => {
  console.log('server is running at port 5100...');
});
