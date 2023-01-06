import { RequestHandler } from 'express';
import { getAuth } from 'firebase-admin/auth';
import { ERRORS } from '../constants/texts';

const isAuthorized: RequestHandler = async (req, res, next) => {
  const token = req.get('Authorization') || '';
  try {
    const decoded = await getAuth().verifyIdToken(token);
    res.locals.userId = decoded.uid;
  } catch (error) {
    return res.status(401).json({ errors: [ERRORS.unauthorized] });
  }
  next();
};

export default isAuthorized;
