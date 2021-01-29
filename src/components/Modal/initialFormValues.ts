export interface CaloriesForm {
  name: string;
  calories: number;
  fat: number;
  carbs: number;
  protein: number;

  [key: string]: string | number;
};

export const initialValues: CaloriesForm = {
  name: '',
  calories: 0,
  fat: 0,
  carbs: 0,
  protein: 0,
};
