const { aggregateStats } = require("./server/api_controllers/db");
const { authenticated } = require('./server/api_controllers/auth0');
const { sourcesRequest, headlinesRequest } = require('./server/api_controllers/news');


const Router = require('express-promise-router');
const router = new Router();

router.get('/api/statistics', authenticated, aggregateStats);

router.post('/api/sources', sourcesRequest);
router.post('/api/headlines', headlinesRequest);

module.exports = router;
