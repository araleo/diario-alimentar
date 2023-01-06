import { Router } from 'express';
import {
  createMeal,
  deleteMeal,
  getAllUserMeals,
  getMealById,
  updateMeal,
} from '../controllers/meals';
import isAuthorized from '../middlewares/authorization';
import {
  idValidators,
  mealBodyValidators,
  updateMealBodyValidators,
  validateRequest,
} from '../middlewares/validators';

const router = Router();

router.post('', isAuthorized, mealBodyValidators, validateRequest, createMeal);

router.get('', isAuthorized, getAllUserMeals);

router.get(
  '/:id',
  isAuthorized,
  idValidators,
  mealBodyValidators,
  validateRequest,
  getMealById
);

router.put(
  '/:id',
  isAuthorized,
  idValidators,
  updateMealBodyValidators,
  validateRequest,
  updateMeal
);

router.delete('/:id', isAuthorized, idValidators, validateRequest, deleteMeal);

export default router;
