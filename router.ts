import { requiresAuth } from 'express-openid-connect';
import { Request, Response } from 'express';

const Router = require('express-promise-router');
const router = new Router();

// router.post('/sources', sourcesRequest);
// router.post('/headlines', headlinesRequest);
// router.get('/statistics', aggregateStats);

router.get('/profile', requiresAuth(), (req: Request, res: Response) => {
  res.send(JSON.stringify(req.oidc.user));
})

module.exports = router;
