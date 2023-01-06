import { model, Schema } from 'mongoose';

export type MealData = {
  _id?: string;
  userId: string;
  datetime: string;
  meal: string;
  quantity: string;
  where: string;
  who: string;
  wasWanted: boolean;
  wanted: string;
  hunger: string;
  reason: string;
  feeling: string;
};

const mealSchema = new Schema<MealData>(
  {
    datetime: { type: String, required: true },
    userId: { type: String, required: true },
    meal: { type: String, required: true },
    quantity: { type: String, required: true },
    where: { type: String, required: true },
    who: { type: String, required: true },
    wasWanted: { type: Boolean, required: true },
    wanted: { type: String, required: false },
    hunger: { type: String, required: true },
    reason: { type: String, required: true },
    feeling: { type: String, required: true },
  },
  { collection: 'meals', toJSON: { getters: true } }
);

const Meal = model<MealData>('Meal', mealSchema);

export default Meal;
