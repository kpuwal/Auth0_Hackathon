const { aggregateStats } = require("./server/api_controllers/db");
const { authenticated } = require('./server/api_controllers/auth0');
const { sourcesRequest, headlinesRequest } = require('./server/api_controllers/news');
// const path = require('path');

const Router = require('express-promise-router');
const router = new Router();

router.get('/statistics', authenticated, aggregateStats);

// app.get('/*', function(req:any, res:any) {
//   res.sendFile('index.html', {root: path.join(__dirname, '../build/client/')});
// });

router.post('/sources', sourcesRequest);
router.post('/headlines', headlinesRequest);

module.exports = router;
