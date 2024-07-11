import { Sandwich, Soup, Salad, HandPlatter, Martini, CakeSlice, FileQuestion } from 'lucide-react';
import { FOOD_TYPES_ENUM } from '@/lib/types';

type Props = {
  type: number;
};

export const FoodIcon: React.FC<Props> = ({ type }) => {
  switch (type) {
    case FOOD_TYPES_ENUM.APPETIZER:
      return <Sandwich />;
    case FOOD_TYPES_ENUM.SOUP:
      return <Soup />;
    case FOOD_TYPES_ENUM.SALAD:
      return <Salad />;
    case FOOD_TYPES_ENUM.MAIN:
      return <HandPlatter />;
    case FOOD_TYPES_ENUM.PALETE_CLEANSER:
      return <Martini />;
    case FOOD_TYPES_ENUM.DESSERT:
      return <CakeSlice />;
  }

  return <FileQuestion />;
};
