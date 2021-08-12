import { Request, Response } from 'express';

export const getStats = async (req: Request, res: Response) => {
  res.send({ message: 'safe success from the backend!'})
}