import {createAction, props} from '@ngrx/store';
import {CoffeeItem} from '../definitions/interface/coffee-item.interface';

export enum CoffeeActionTypes {
  GetList = '[Coffee List] Get List',
  GetListSuccess = '[Coffee List] Get List Success',
  GetListError = '[Coffee List] Get List Error',

  GetCoffeeById = '[Coffee] Get Coffee By Id',
  GetCoffeeByIdSuccess = '[Coffee] Get Coffee By Id Success',
  GetCoffeeByIdError = '[Coffee] Get Coffee By Id Error',

  SetCurrentPage = '[Pagination] Set Current Page',
  PreviousPage = '[Pagination] Previous Page',
  NextPage = '[Pagination] Next page',
}

export const getCoffeeList = createAction(CoffeeActionTypes.GetList);

export const getCoffeeListError = createAction(CoffeeActionTypes.GetListError);

export const getCoffeeListSuccess = createAction(
  CoffeeActionTypes.GetListSuccess,
  props<{coffeeList: CoffeeItem[]}>()
);

export const getCoffeeById = createAction(
  CoffeeActionTypes.GetCoffeeById,
  props<{selectedId: number}>()
);

export const getCoffeeByIdError = createAction(CoffeeActionTypes.GetCoffeeByIdError);

export const getCoffeeByIdSuccess = createAction(
  CoffeeActionTypes.GetCoffeeByIdSuccess,
  props<{selectedCoffee: CoffeeItem}>()
);

export const setCurrentPage = createAction(
  CoffeeActionTypes.SetCurrentPage,
  props<{page: number}>()
);

export const decreaseCurrentPage = createAction(CoffeeActionTypes.PreviousPage);

export const increaseCurrentPage = createAction(CoffeeActionTypes.NextPage);
