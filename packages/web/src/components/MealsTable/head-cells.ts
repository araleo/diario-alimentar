import { MealData } from '../../@types/meal-data';

export type HeadCell = {
  id: keyof MealData;
  label: string;
};

export const HEAD_CELLS: readonly HeadCell[] = [
  { id: 'datetime', label: 'Dia e Hora' },
  { id: 'meal', label: 'Alimento' },
  { id: 'quantity', label: 'Quantidade' },
  { id: 'where', label: 'Onde' },
  { id: 'who', label: 'Com quem' },
  { id: 'wasWanted', label: 'Comi o que queria?' },
  { id: 'wanted', label: 'O que gostaria' },
  { id: 'hunger', label: 'O quanto estava com fome' },
  { id: 'reason', label: 'Motivo ou gatilho' },
  { id: 'feeling', label: 'Como me senti' },
];
