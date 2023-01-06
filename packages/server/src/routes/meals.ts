import { Router } from 'express';
import {
  createMeal,
  deleteMeal,
  getAllUserMeals,
  getMealById,
  updateMeal,
} from '../controllers/meals';

const router = Router();

router.post('', createMeal);

router.get('', getAllUserMeals);

router.get('/:id', getMealById);

router.put('/:id', updateMeal);

router.delete('/:id', deleteMeal);

export default router;
