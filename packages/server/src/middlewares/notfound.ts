import { RequestHandler } from 'express';

const notFoundMiddleware: RequestHandler = (_req, res) => {
  res.status(404).json({});
};

export default notFoundMiddleware;
