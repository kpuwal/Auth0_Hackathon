import { requiresAuth } from 'express-openid-connect';
import { displayProfile, loginToApp } from './server/api_controllers/auth0';
// import { aggregateStats } from './server/api_controllers/db';

const Router = require('express-promise-router');
const router = new Router();

// router.post('/sources', sourcesRequest);
// router.post('/headlines', headlinesRequest);
router.get('/logintoapp', loginToApp);
router.get('/statistics',requiresAuth());
router.get('/profile', requiresAuth(), displayProfile);

module.exports = router;
