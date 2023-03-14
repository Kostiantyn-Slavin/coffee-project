import {Actions} from '@ngrx/effects';
import {Observable, of} from 'rxjs';
import {CoffeeEffects} from './coffee.effects';
import {CoffeeService} from '../services/coffee.service';
import {TestBed} from '@angular/core/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {AppState} from '../../store';
import {initialState as CoffeeInitialState} from './coffee.reducer';
import {provideMockStore} from '@ngrx/store/testing';
import {provideMockActions} from '@ngrx/effects/testing';
import {coffeeListMock} from '../container/coffee-list-container.component.spec';
import {
  getCoffeeById,
  getCoffeeByIdSuccess,
  getCoffeeList,
  getCoffeeListSuccess,
} from './coffee.actions';
import {cold, hot} from 'jasmine-marbles';

const initialState: AppState = {
  coffeeState: {...CoffeeInitialState},
};

const coffeeServiceStub: Partial<CoffeeService> = {
  getAllCoffee: jest.fn(),
  getCoffeeById: jest.fn(),
};

describe('AnalyticEffects', () => {
  let actions$: Observable<Actions>;
  let effects: CoffeeEffects;
  let coffeeService: CoffeeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        provideMockStore({initialState}),
        provideMockActions(() => actions$),
        CoffeeEffects,
        {
          provide: CoffeeService,
          useValue: coffeeServiceStub,
        },
      ],
    });

    effects = TestBed.inject(CoffeeEffects);
    actions$ = TestBed.inject(Actions);
    coffeeService = TestBed.inject(CoffeeService);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  describe('getAllCoffee$', () => {
    it('should return a getCoffeeListSuccess', () => {
      jest.spyOn(coffeeService, 'getAllCoffee').mockReturnValue(of(coffeeListMock));

      const action = getCoffeeList();
      const completion = getCoffeeListSuccess({coffeeList: coffeeListMock});
      const expected = cold('-b', {b: completion});
      actions$ = hot('-a', {a: action});

      expect(effects.getAllCoffee$).toBeObservable(expected);
    });
  });

  describe('getCoffeeById$', () => {
    it('should return a getCoffeeByIdSuccess', () => {
      jest.spyOn(coffeeService, 'getCoffeeById').mockReturnValue(of(coffeeListMock[0]));

      const action = getCoffeeById({selectedId: 1});
      const completion = getCoffeeByIdSuccess({selectedCoffee: coffeeListMock[0]});
      const expected = cold('-b', {b: completion});
      actions$ = hot('-a', {a: action});

      expect(effects.getCoffeeById$).toBeObservable(expected);
    });
  });
});
