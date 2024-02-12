import express from 'express';
const app = express();

import { dirname } from 'path';
import { fileURLToPath } from 'url';
import path from 'path';

import { products } from './data/products.js';

const __dirname = dirname(fileURLToPath(import.meta.url));
app.use(express.static(path.resolve(__dirname, '../', 'dist')));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/api/v1/products', (req, res) => {
  res.status(200).json(products);
});

app.get('/api/v1/products/:id', (req, res) => {
  const product = products.find((p) => p.id === req.params.id);
  res.status(200).json(product);
});

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, './dist', 'index.html'));
});

app.listen(5100, () => {
  console.log('server is running at port 5100...');
});
