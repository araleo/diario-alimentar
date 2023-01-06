import { Router } from 'express';
import {
  createMeal,
  deleteMeal,
  getAllUserMeals,
  getMealById,
  updateMeal,
} from '../controllers/meals';
import isAuthorized from '../middlewares/authorization';

const router = Router();

router.post('', isAuthorized, createMeal);

router.get('', isAuthorized, getAllUserMeals);

router.get('/:id', isAuthorized, getMealById);

router.put('/:id', isAuthorized, updateMeal);

router.delete('/:id', isAuthorized, deleteMeal);

export default router;
