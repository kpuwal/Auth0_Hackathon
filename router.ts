import { requiresAuth } from 'express-openid-connect';
import { displayProfile, loginToApp } from './server/api_controllers/auth0';
// import { aggregateStats } from './server/api_controllers/db';
import { Request, Response } from 'express';


const Router = require('express-promise-router');
const router = new Router();

// router.post('/sources', sourcesRequest);
// router.post('/headlines', headlinesRequest);
router.get('/auth/login', loginToApp);
router.get('/statistics',requiresAuth());
router.get('/profile', requiresAuth(), displayProfile);
router.get('/about', (req: Request, res: Response) => {
  console.log('im about here')
})

module.exports = router;
