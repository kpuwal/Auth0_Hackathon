require('dotenv').config();
const express = require('express');
const path = require('path');
const app = express();
const router = require('./router');
const PORT = process.env.PORT || 3000;
import { Request, Response } from 'express';
import { requiresAuth } from 'express-openid-connect';

const { auth } = require('express-openid-connect');

const config = {
  authRequired: false,
  auth0Logout: true,
  secret: process.env.SECRET,
  baseURL: 'http://localhost:5000',
  clientID: process.env.CLIENT_ID,
  issuerBaseURL: process.env.BASE_URL
};

app.set('trust proxy', 'loopback');

app.use(express.urlencoded({extended: true}));
app.use(express.json());
// app.use(auth(config));

app.use(express.static(path.resolve("./") + "/build/client"));

app.get('/check', (req: Request, res: Response) => {
  console.log('im here')
  const result = req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out';
  console.log(result)
  res.send(result);
});

app.get('/profile', requiresAuth(), (req: Request, res: Response) => {
  res.send(JSON.stringify(req.oidc.user));
});

app.get(
  '/login',
  (req: Request, res: Response) => {
    console.log('im here login')
  }
);

// app.use('/', router);

app.listen(PORT, () => {
  console.log(`Listening on Port 🍷: ${PORT}`);
});
