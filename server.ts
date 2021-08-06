require('dotenv').config();
const express = require('express');
const { auth } = require('express-openid-connect');
const path = require('path');
const app = express();
const router = require('./router');

const PORT = process.env.PORT || 3000;

const config = {
  authRequired: false,
  auth0Logout: true,
  secret: process.env.SECRET,
  baseURL: 'http://localhost:5000',
  clientID: process.env.CLIENT_ID,
  issuerBaseURL: process.env.BASE_URL,
  routes: {
    login: false,
    
  }
};

app.set('trust proxy', 'loopback');

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(auth(config));

app.use(express.static(path.resolve("./") + "/build/client"));

app.use('/', router);

app.listen(PORT, () => {
  console.log(`Listening on Port 🍷: ${PORT}`);
});
