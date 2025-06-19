const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());
let users = [];

app.get('/users', (req, res) => res.json(users));
app.post('/users', (req, res) => {
  users.push(req.body);
  res.json({ message: 'User added', user: req.body });
});

app.listen(port, () => console.log(`User service running on port ${port}`));