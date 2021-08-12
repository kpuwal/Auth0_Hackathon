// import { aggregateStats } from './server/api_controllers/db';
const { authenticated } = require('./server/api_controllers/auth0');
const { getStats } = require('./server/api_controllers/stats');

const Router = require('express-promise-router');
const router = new Router();

// router.post('/sources', sourcesRequest);
// router.post('/headlines', headlinesRequest);

router.get('/statistics', authenticated, getStats);

module.exports = router;
