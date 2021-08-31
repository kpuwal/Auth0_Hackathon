require('dotenv').config();
const express = require('express');
const path = require('path');
const app = express();
const rateLimit = require("express-rate-limit");
const helmet = require('helmet');
const hpp = require('hpp');
const csurf = require('csurf');
const cors = require('cors');
const appRouter = require('./router');

const clientOrigins = process.env.CLIENT_ORIGIN_URL;

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
});

const PORT = process.env.PORT || 3000;

app.set('trust proxy', 1);
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors({ origin: clientOrigins }));

// app.use(express.static(path.join(__dirname, 'build')));
app.use(express.static(path.resolve("./") + "/build/client"));


// app.get('*', function(req:any, res:any) {
//   res.sendFile('index.html', {root: path.join(__dirname, '../build/client/')});
// });

app.get('*', (req:any, res:any) => (
  res.sendFile('index.html', {root: path.join(__dirname, '../build/client/')})
))
app.use('/', appRouter);
// if (process.env.NODE_ENV === 'production') {
//   // Serve any static files
//   app.use(express.static(path.join(__dirname, 'build/client')));
//   // Handle React routing, return all requests to React app
//   app.get('*', function(req:any, res:any) {
//     res.sendFile(path.join(__dirname, 'build/client', 'index.html'));
//   });
// }

/* Security Configs */
// app.use(helmet());
app.use(hpp());

// app.use(csurf());
app.use(limiter);

app.listen(PORT, () => {
  console.log(`Listening on Port: ${PORT} 🍷`);
});
