const express = require('express');
const app = express();
const port = 3001;

app.use(express.json());
let products = [];

app.get('/products', (req, res) => res.json(products));
app.post('/products', (req, res) => {
  products.push(req.body);
  res.json({ message: 'Product added', product: req.body });
});

app.listen(port, () => console.log(`Product service running on port ${port}`));