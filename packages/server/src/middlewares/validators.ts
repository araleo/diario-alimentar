import { RequestHandler } from 'express';
import { body, param, validationResult } from 'express-validator';
import { ERRORS } from '../constants/texts';

type ValidationError = {
  value: string;
  msg: string;
  param: string;
  location: string;
};

export const validateRequest: RequestHandler = async (req, res, next) => {
  const result = validationResult(req);
  if (!result.isEmpty()) {
    const messages: string[] = [];
    const errors = result.array() as ValidationError[];
    errors.forEach(error => messages.push(error.msg));
    return res.status(400).json({ errors: messages });
  }
  next();
};

export const mealBodyValidators = [
  body('userId').trim().escape().notEmpty().withMessage(ERRORS.invalidUserId),
  body('datetime')
    .trim()
    .escape()
    .notEmpty()
    .withMessage(ERRORS.invalidDatetime),
  body('meal').trim().escape().notEmpty().withMessage(ERRORS.invalidMeal),
  body('quantity')
    .trim()
    .escape()
    .notEmpty()
    .withMessage(ERRORS.invalidQuantity),
  body('where').trim().escape().notEmpty().withMessage(ERRORS.invalidWhere),
  body('who').trim().escape().notEmpty().withMessage(ERRORS.invalidWho),
  body('wasWanted')
    .trim()
    .escape()
    .notEmpty()
    .isBoolean()
    .withMessage(ERRORS.invalidWasWanted),
  body('wanted')
    .optional()
    .trim()
    .escape()
    .notEmpty()
    .withMessage(ERRORS.invalidWanted),
  body('hunger').trim().escape().notEmpty().withMessage(ERRORS.invalidHunger),
  body('reason').trim().escape().notEmpty().withMessage(ERRORS.invalidReason),
  body('feeling').trim().escape().notEmpty().withMessage(ERRORS.invalidFeeling),
];

export const updateMealBodyValidators = [
  body('userId')
    .optional()
    .trim()
    .escape()
    .notEmpty()
    .withMessage(ERRORS.invalidUserId),
  body('datetime')
    .optional()
    .trim()
    .escape()
    .notEmpty()
    .withMessage(ERRORS.invalidDatetime),
  body('meal')
    .optional()
    .trim()
    .escape()
    .notEmpty()
    .withMessage(ERRORS.invalidMeal),
  body('quantity')
    .optional()
    .trim()
    .escape()
    .notEmpty()
    .withMessage(ERRORS.invalidQuantity),
  body('where')
    .optional()
    .trim()
    .escape()
    .notEmpty()
    .withMessage(ERRORS.invalidWhere),
  body('who')
    .optional()
    .trim()
    .escape()
    .notEmpty()
    .withMessage(ERRORS.invalidWho),
  body('wasWanted')
    .optional()
    .trim()
    .escape()
    .notEmpty()
    .isBoolean()
    .withMessage(ERRORS.invalidWasWanted),
  body('wanted')
    .optional()
    .trim()
    .escape()
    .notEmpty()
    .withMessage(ERRORS.invalidWanted),
  body('hunger')
    .optional()
    .trim()
    .escape()
    .notEmpty()
    .withMessage(ERRORS.invalidHunger),
  body('reason')
    .optional()
    .trim()
    .escape()
    .notEmpty()
    .withMessage(ERRORS.invalidReason),
  body('feeling')
    .optional()
    .trim()
    .escape()
    .notEmpty()
    .withMessage(ERRORS.invalidFeeling),
];

export const idValidators = [
  param('id')
    .trim()
    .escape()
    .notEmpty()
    .isMongoId()
    .withMessage(ERRORS.invalidMongoId),
];
