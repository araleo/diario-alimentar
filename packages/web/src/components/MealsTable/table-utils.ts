import { MealData } from '../../@types/meal-data';
import { Order } from '../../@types/order';
import { LABELS } from '../../constants/texts';

export type HeadCell = {
  id: keyof MealData;
  label: string;
};

export const HEAD_CELLS: readonly HeadCell[] = [
  { id: 'datetime', label: LABELS.datetime },
  { id: 'meal', label: LABELS.meal },
  { id: 'quantity', label: LABELS.quantity },
  { id: 'where', label: LABELS.where },
  { id: 'who', label: LABELS.whoWith },
  { id: 'wasWanted', label: LABELS.wasWanted },
  { id: 'wanted', label: LABELS.wanted },
  { id: 'hunger', label: LABELS.hunger },
  { id: 'reason', label: LABELS.reason },
  { id: 'feeling', label: LABELS.feeling },
];

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
