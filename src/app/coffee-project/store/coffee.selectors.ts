import {createFeatureSelector, createSelector} from '@ngrx/store';
import {CoffeeState} from './coffee.state';
import {CoffeeItem} from '../definitions/interface/coffee-item.interface';

export const getCoffeeState = createFeatureSelector<CoffeeState>('coffeeState');

export const selectCoffeeList = createSelector(
  getCoffeeState,
  (state: CoffeeState): CoffeeItem[] => state.coffeeList
);

export const getSelectedCoffee = createSelector(
  getCoffeeState,
  (state: CoffeeState): CoffeeItem => state.selectedCoffee!
);

export const selectCurrentPage = createSelector(
  getCoffeeState,
  (state: CoffeeState): number => state.currentPage
);

export const getLoaderStatus = createSelector(
  getCoffeeState,
  (state: CoffeeState): boolean => state.loader
);

export const getSlicedCoffeeList = createSelector(
  selectCoffeeList,
  selectCurrentPage,
  (coffeeList, currentPage) => {
    const pageItemsLimit = 10;
    const startIndex = currentPage * pageItemsLimit;
    const endIndex = startIndex + pageItemsLimit;
    return (coffeeList || [])?.slice(startIndex, endIndex);
  }
);
