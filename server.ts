require('dotenv').config();
const express = require('express');
const path = require('path');
const app = express();
const router = require('./router');
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(express.static(path.resolve("./") + "/build/client"));

// app.use('/', router);

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});