import { RequestHandler } from 'express';
import { ERRORS } from '../constants/texts';

import Meal, { MealData } from '../models/meal';

export const createMeal: RequestHandler = async (req, res) => {
  const data = req.body as MealData;
  const newMeal = new Meal(data);

  try {
    const meal = await newMeal.save();
    res.status(201).json({ newMealId: meal._id.toString() });
  } catch (error) {
    res.status(500).json({ errors: [ERRORS.unexpected] });
  }
};

export const getAllUserMeals: RequestHandler = async (req, res) => {
  const { id: userId } = req.params;
  try {
    const meals = await Meal.find({ userId });
    res.status(201).json({ meals });
  } catch (error) {
    res.status(500).json({ errors: [ERRORS.unexpected] });
  }
};

export const getMealById: RequestHandler = async (req, res) => {
  // add check to only get the meal for the logged in user
  const { id } = req.params;
  try {
    const meal = await Meal.findById(id);
    if (meal === null) {
      return res.status(404).json({});
    }
    res.status(200).json({ meal });
  } catch (error) {
    res.status(500).json({ errors: [ERRORS.unexpected] });
  }
};

export const updateMeal: RequestHandler = async (req, res) => {
  // add check to only get the meal for the logged in user
  const { id } = req.params;
  const data = req.body as MealData;
  try {
    const meal = await Meal.findByIdAndUpdate(id, data, { new: true });
    if (meal === null) {
      return res.status(404).json({});
    }
    res.status(200).json({ meal });
  } catch (error) {
    res.status(500).json({ errors: [ERRORS.unexpected] });
  }
};

export const deleteMeal: RequestHandler = async (req, res) => {
  // add check to only get the meal for the logged in user
  const { id } = req.params;
  try {
    const meal = await Meal.findByIdAndDelete(id);
    if (meal === null) {
      return res.status(404).json({});
    }
    res.status(200).json({ meal });
  } catch (error) {
    res.status(500).json({ errors: [ERRORS.unexpected] });
  }
};
