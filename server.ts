require('dotenv').config();
const express = require('express');
const path = require('path');
const app = express();
const helmet = require('helmet');
const hpp = require('hpp');
const csurf = require('csurf');
const appRouter = require('./router');
const rateLimit = require("express-rate-limit");

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
});

const PORT = process.env.PORT || 3000;

app.set('trust proxy', 1);
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(express.static(path.resolve("./") + "/build/client"));

/* Security Configs */
app.use(helmet());
app.use(hpp());

app.use('/', appRouter);
app.use(csurf());
app.use(limiter);

app.listen(PORT, () => {
  console.log(`Listening on Port: ${PORT} 🍷`);
});
