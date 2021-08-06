import { Request, Response } from 'express';

export const displayProfile = (request: Request, response: Response) => {
    response.send(JSON.stringify(request.oidc.user));
}

export const loginToApp = (request: Request, response: Response) => {
  response.oidc.login({ returnTo: '/' })
}