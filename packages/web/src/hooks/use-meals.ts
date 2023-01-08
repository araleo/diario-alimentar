import useSWR from 'swr';
import { MealData } from '../@types/meal-data';

import appAxios from '../app-axios';

const fetcher = (url: string) =>
  appAxios.get(url).then(res => (res.data as { meals: MealData[] }).meals);

const useMeals = () => {
  const { data, error, isLoading } = useSWR('/meals', fetcher);

  return { data, error, isLoading };
};

export default useMeals;
