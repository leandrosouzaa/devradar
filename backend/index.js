const express = require('express');

const app = express();

app.get('/', (req, res) => res.json('Olá Mundo'));

app.listen(3333);
