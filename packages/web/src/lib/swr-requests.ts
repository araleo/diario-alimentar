import { MealData } from '../@types/meal-data';
import appAxios from '../app-axios';

export const sendMealPostRequest = async (
  url: string,
  { arg }: { arg: MealData }
) => {
  const res = await appAxios.post(url, arg);
  return res.data;
};

export const sendMealDeleteRequest = async (
  url: string,
  { arg }: { arg: string }
) => {
  const res = await appAxios.delete(`${url}/${arg}`);
  return res.data;
};
