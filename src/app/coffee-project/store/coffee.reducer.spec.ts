import {coffeeReducer, initialState} from './coffee.reducer';
import {CoffeeState} from './coffee.state';
import {
  decreaseCurrentPage,
  getCoffeeList,
  getCoffeeListError,
  getCoffeeListSuccess,
} from './coffee.actions';
import {coffeeDataMock} from './coffee.selectors.spec';

describe('Coffee reducers', () => {
  it('should return the default state', () => {
    const action = {type: 'Unknown'};
    const state = coffeeReducer(initialState, action);

    expect(state).toBe(initialState);
  });

  it('should get Coffee State', () => {
    const newState: Partial<CoffeeState> = {
      coffeeList: [],
      selectedCoffee: null,
      currentPage: 0,
      loader: true,
    };
    const action = getCoffeeList();
    const state = coffeeReducer(initialState, action);

    expect(state).toEqual(newState);
    expect(state).not.toBe(newState);
  });

  it('should get Coffee list', () => {
    const newState: Partial<CoffeeState> = {
      coffeeList: coffeeDataMock,
      selectedCoffee: null,
      currentPage: 0,
      loader: false,
    };
    const action = getCoffeeListSuccess({coffeeList: coffeeDataMock});
    const state = coffeeReducer(initialState, action);

    expect(state).toEqual(newState);
    expect(state).not.toBe(newState);
  });

  it('should set error', () => {
    const newState: Partial<CoffeeState> = {
      coffeeList: [],
      selectedCoffee: null,
      currentPage: 0,
      loader: false,
    };
    const action = getCoffeeListError();
    const state = coffeeReducer(initialState, action);

    expect(state).toEqual(newState);
    expect(state).not.toBe(newState);
  });

  it('should decrease current page', () => {
    const newState: Partial<CoffeeState> = {
      coffeeList: [],
      selectedCoffee: null,
      currentPage: 0,
      loader: false,
    };
    const action = decreaseCurrentPage();
    const state = coffeeReducer(initialState, action);

    expect(state).toEqual(newState);
    expect(state).not.toBe(newState);
  });
});
