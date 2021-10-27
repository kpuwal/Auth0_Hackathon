require('dotenv').config();
const express = require('express');
import { Request, Response } from 'express';
const path = require('path');
const app = express();
const rateLimit = require("express-rate-limit");
const helmet = require('helmet');
const hpp = require('hpp');
// const csrf = require('csurf');
const cors = require('cors');
const appRouter = require('./router');

const clientOrigins = process.env.CLIENT_ORIGIN_URL;
// var csrfProtection = csrf({ cookie: true })

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
});

const PORT = process.env.PORT || 3000;

app.set('trust proxy', 1);
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors({ origin: clientOrigins }));

app.use(express.static(path.resolve("./") + "/build/client"));

app.use('/',  appRouter);

// app.get('*', function (req: Request, res: Response) {
//   res.sendFile(path.join(__dirname, '../build/client', 'index.html'));
// });

app.get('*', (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, '../build/client', 'index.html'));
});

/* Security Configs */
app.use(helmet());
app.use(hpp());

// app.use(csurf());
app.use(limiter);

app.listen(PORT, () => {
  console.log(`Listening on Port: ${PORT} 🍷`);
});
