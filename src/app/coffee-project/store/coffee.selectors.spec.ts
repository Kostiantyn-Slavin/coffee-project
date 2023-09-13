import {getSelectedCoffee, selectCoffeeList} from './coffee.selectors';

export const coffeeDataMock = [
  {
    id: 9809,
    uid: 'e2bb804d-2f9c-4d4c-ac04-23d516c30e69',
    blend_name: 'Express Bean',
    origin: 'Nariño, Colombia',
    variety: 'S795',
    notes: 'balanced, smooth, graham cracker, leafy greens, medicinal',
    intensifier: 'delicate',
  },
  {
    id: 9779,
    uid: '545b2556-2249-4eee-bb93-16588ecfb446',
    blend_name: 'Goodbye Cake',
    origin: 'Estelí, Nicaragua',
    variety: 'Gesha',
    notes: 'wild, smooth, lemonade, tomato, cranberry',
    intensifier: 'lingering',
  },
];

export const CoffeeStateMock = {
  coffeeList: coffeeDataMock,
  selectedCoffee: coffeeDataMock[0],
  currentPage: 0,
  loader: false,
};

describe('Coffee selectors', () => {
  it('should select CoffeeList', () => {
    const result = selectCoffeeList({
      coffeeState: CoffeeStateMock,
    });

    expect(result).toEqual(CoffeeStateMock.coffeeList);
  });

  it('should select CoffeeList', () => {
    const result = getSelectedCoffee({
      coffeeState: CoffeeStateMock,
    });

    expect(result).toEqual(CoffeeStateMock.selectedCoffee);
  });
});
