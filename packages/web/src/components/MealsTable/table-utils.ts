import { MealData } from '../../@types/meal-data';
import { Order } from '../../@types/order';

export const descendingComparator = <T>(a: T, b: T, orderBy: keyof T) => {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getComparator = <Key extends keyof any>(
  order: Order,
  orderBy: Key
): ((
  a: { [key in Key]: number | string | boolean },
  b: { [key in Key]: number | string | boolean }
) => number) =>
  order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);

export const DUMMY_DATA: MealData[] = [
  {
    id: '1',
    datetime: '2022-01-01',
    meal: 'Mecão',
    quantity: '1',
    where: 'Casa',
    who: 'Belinha',
    wasWanted: true,
    wanted: 'Mecão',
    hunger: 'Pouca',
    reason: 'Gula',
    feeling: 'Gordo',
  },
  {
    id: '2',
    datetime: '2022-01-02',
    meal: 'BK',
    quantity: '1',
    where: 'Casa',
    who: 'Belinha',
    wasWanted: true,
    wanted: 'BK',
    hunger: 'Pouca',
    reason: 'Gula',
    feeling: 'Gordo',
  },
  {
    id: '3',
    datetime: '2022-01-03',
    meal: 'Brasaria',
    quantity: '1',
    where: 'Casa',
    who: 'Belinha',
    wasWanted: true,
    wanted: 'Brasaria',
    hunger: 'Pouca',
    reason: 'Gula',
    feeling: 'Gordo',
  },
  {
    id: '4',
    datetime: '2022-01-01',
    meal: 'Frango frito',
    quantity: '1',
    where: 'Casa',
    who: 'Belinha',
    wasWanted: true,
    wanted: 'Frango frito',
    hunger: 'Pouca',
    reason: 'Gula',
    feeling: 'Gordo',
  },
];
