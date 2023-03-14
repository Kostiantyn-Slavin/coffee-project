import {CoffeeItem} from '../definitions/interface/coffee-item.interface';

export interface CoffeeState {
  coffeeList: CoffeeItem[];
  selectedCoffee: CoffeeItem | null;
  currentPage: number;
  loader: boolean;
}
