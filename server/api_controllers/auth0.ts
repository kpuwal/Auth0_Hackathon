const jwt = require('express-jwt');
const jwks = require('jwks-rsa');
const domain = process.env.AUTH0_DOMAIN;
const audience = process.env.AUTH0_AUDIENCE;

export const authenticated = jwt({
  secret: jwks.expressJwtSecret({
      cache: true,
      rateLimit: true,
      jwksRequestsPerMinute: 5,
      jwksUri: `https://${domain}/.well-known/jwks.json`
}),
audience,
issuer: `https://${domain}/`,
algorithms: ['RS256']
});
