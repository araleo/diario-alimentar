import useSWR from 'swr';

import appAxios from '../app-axios';

const fetcher = (url: string) => appAxios.get(url).then(res => res.data);

const useMeals = () => {
  const { data, error, isLoading } = useSWR('/', fetcher);

  return { data, error, isLoading };
};

export default useMeals;
