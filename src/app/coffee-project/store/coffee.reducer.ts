import {createReducer, on} from '@ngrx/store';
import {
  decreaseCurrentPage,
  getCoffeeList,
  getCoffeeListError,
  increaseCurrentPage,
  getCoffeeListSuccess,
  setCurrentPage,
  getCoffeeByIdSuccess,
  getCoffeeById,
  getCoffeeByIdError,
} from './coffee.actions';
import {CoffeeState} from './coffee.state';
import {TypedAction} from '@ngrx/store/src/models';
import {CoffeeItem} from '../definitions/interface/coffee-item.interface';

export const initialState: CoffeeState = {
  coffeeList: [],
  selectedCoffee: null,
  currentPage: 0,
  loader: false,
};

const getCoffeeListReducer = (state: CoffeeState): CoffeeState => {
  return {
    ...state,
    loader: true,
  };
};

const getCoffeeListSuccessReducer = (
  state: CoffeeState,
  {coffeeList}: TypedAction<string> & {coffeeList: CoffeeItem[]}
): CoffeeState => {
  return {
    ...state,
    coffeeList,
    loader: false,
  };
};

const setCoffeeListErrorReducer = (state: CoffeeState): CoffeeState => {
  return {
    ...state,
    loader: false,
  };
};

const getCoffeeByIdReducer = (state: CoffeeState): CoffeeState => {
  return {
    ...state,
    loader: true,
  };
};

const getCoffeeByIdSuccessReducer = (
  state: CoffeeState,
  {selectedCoffee}: TypedAction<string> & {selectedCoffee: CoffeeItem}
): CoffeeState => {
  return {
    ...state,
    selectedCoffee,
    loader: false,
  };
};

const getCoffeeByIdErrorReducer = (state: CoffeeState): CoffeeState => {
  return {
    ...state,
    loader: false,
  };
};

const setCurrentPageReducer = (
  state: CoffeeState,
  {page}: TypedAction<string> & {page: number}
): CoffeeState => {
  return {
    ...state,
    currentPage: page,
  };
};

const decreaseCurrentPageReducer = (state: CoffeeState): CoffeeState => {
  const decreasedPage = state.currentPage - 1;
  const page = decreasedPage >= 0 ? decreasedPage : state.currentPage;
  return {
    ...state,
    currentPage: page,
  };
};

const increaseCurrentPageReducer = (state: CoffeeState): CoffeeState => {
  const maxIndex = Math.ceil(state.coffeeList.length / 10);
  const increasedPage = state.currentPage + 1;
  const page = increasedPage < maxIndex ? increasedPage : state.currentPage;
  return {
    ...state,
    currentPage: page,
  };
};

export const coffeeReducer = createReducer(
  initialState,
  on(getCoffeeList, getCoffeeListReducer),
  on(getCoffeeListSuccess, getCoffeeListSuccessReducer),
  on(getCoffeeListError, setCoffeeListErrorReducer),
  on(getCoffeeById, getCoffeeByIdReducer),
  on(getCoffeeByIdSuccess, getCoffeeByIdSuccessReducer),
  on(getCoffeeByIdError, getCoffeeByIdErrorReducer),
  on(setCurrentPage, setCurrentPageReducer),
  on(decreaseCurrentPage, decreaseCurrentPageReducer),
  on(increaseCurrentPage, increaseCurrentPageReducer)
);
