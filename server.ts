require('dotenv').config();
const express = require('express');
const { auth } = require('express-openid-connect');
const path = require('path');
const app = express();
const helmet = require('helmet');
const hpp = require('hpp');
const csurf = require('csurf');
const router = require('./router');
const rateLimit = require("express-rate-limit");

// Enable if you're behind a reverse proxy (Heroku, Bluemix, AWS ELB, Nginx, etc)
// see https://expressjs.com/en/guide/behind-proxies.html
// app.set('trust proxy', 1);

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
});

const PORT = process.env.PORT || 3000;

const config = {
  authRequired: false,
  auth0Logout: true,
  secret: process.env.SECRET,
  baseURL: process.env.BASE_URL,
  clientID: process.env.CLIENT_ID,
  issuerBaseURL: process.env.AUTH0_ISSUER_BASE_URL
};

app.set('trust proxy', 1);
/* Security Configs */
app.use(helmet());
app.use(hpp());

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(auth(config));

app.use(express.static(path.resolve("./") + "/build/client"));

app.use('/', router);
app.use(csurf());
app.use(limiter);

app.listen(PORT, () => {
  console.log(`Listening on Port 🍷: ${PORT}`);
});
