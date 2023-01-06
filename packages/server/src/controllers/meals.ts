import { RequestHandler } from 'express';
import { ERRORS } from '../constants/texts';

import Meal, { MealData } from '../models/meal';

export const createMeal: RequestHandler = async (req, res) => {
  const data = req.body as MealData;
  const { userId } = res.locals;
  const newMeal = new Meal({ ...data, userId });

  try {
    const meal = await newMeal.save();
    res.status(201).json({ newMealId: meal._id.toString() });
  } catch (error) {
    res.status(500).json({ errors: [ERRORS.unexpected] });
  }
};

export const getAllUserMeals: RequestHandler = async (_, res) => {
  const { userId } = res.locals;
  try {
    const meals = await Meal.find({ userId });
    res.status(201).json({ meals });
  } catch (error) {
    res.status(500).json({ errors: [ERRORS.unexpected] });
  }
};

export const getMealById: RequestHandler = async (req, res) => {
  const { id } = req.params;
  const { userId } = res.locals;
  try {
    const meal = await Meal.find({ _id: id, userId });
    if (meal === null) {
      return res.status(404).json({});
    }
    res.status(200).json({ meal });
  } catch (error) {
    res.status(500).json({ errors: [ERRORS.unexpected] });
  }
};

export const updateMeal: RequestHandler = async (req, res) => {
  const { id } = req.params;
  const { userId } = res.locals;
  const data = req.body as MealData;
  try {
    const meal = await Meal.findOneAndUpdate({ _id: id, userId }, data, {
      new: true,
    });
    if (meal === null) {
      return res.status(404).json({});
    }
    res.status(200).json({ meal });
  } catch (error) {
    res.status(500).json({ errors: [ERRORS.unexpected] });
  }
};

export const deleteMeal: RequestHandler = async (req, res) => {
  const { id } = req.params;
  const { userId } = res.locals;
  try {
    const meal = await Meal.findOneAndDelete({ _id: id, userId });
    if (meal === null) {
      return res.status(404).json({});
    }
    res.status(200).json({ meal });
  } catch (error) {
    res.status(500).json({ errors: [ERRORS.unexpected] });
  }
};
