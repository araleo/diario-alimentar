import { Request, Response } from 'express';

export interface IErrorResponse {
  errors: string[];
}

const errMiddleware = (err: Error, _req: Request, res: Response) => {
  // TODO log errors
  res.status(500).json({ errors: [err.message] });
};

export default errMiddleware;
