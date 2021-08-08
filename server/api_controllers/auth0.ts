const jwt = require('express-jwt');
const jwks = require('jwks-rsa');

// Auth0 configuration
export const authenticated = jwt({
  secret: jwks.expressJwtSecret({
      cache: true,
      rateLimit: true,
      jwksRequestsPerMinute: 5,
      jwksUri: 'https://dev-vbba6ora.us.auth0.com/.well-known/jwks.json'
}),
audience: 'https://api-grade-news',
issuer: 'https://dev-vbba6ora.us.auth0.com/',
algorithms: ['RS256']
});
