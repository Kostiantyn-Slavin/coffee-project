import {TestBed} from '@angular/core/testing';

import {CoffeeDetailsResolver} from './coffee-details.resolver';
import {MockStore, provideMockStore} from '@ngrx/store/testing';
import {AppState} from '../../store';
import {initialState as CoffeeInitialState} from '../store/coffee.reducer';
import {Observable} from 'rxjs';
import {coffeeListMock} from '../container/coffee-list-container.component.spec';
import {ActivatedRouteSnapshot, convertToParamMap} from '@angular/router';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {CoffeeItem} from '../definitions/interface/coffee-item.interface';

const initialState: AppState = {
  coffeeState: {...CoffeeInitialState},
};

describe('CoffeeDetailsService', () => {
  let resolver: CoffeeDetailsResolver;
  let store: MockStore<AppState>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideMockStore({initialState}),
        CoffeeDetailsResolver,
        {
          provide: ActivatedRouteSnapshot,
          useValue: {
            snapshot: {
              params: {
                property: 'id',
                someId: '1',
              },
              data: {
                yourResolvedValue: {data: coffeeListMock[0]},
              },
            },
          },
        },
      ],
      schemas: [NO_ERRORS_SCHEMA],
    });
    resolver = TestBed.inject(CoffeeDetailsResolver);
    store = TestBed.inject(MockStore);
    store.setState({...initialState});
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });

  it('should provide resolved data', () => {
    const route = {
      paramMap: convertToParamMap({
        id: '1',
      }),
    } as ActivatedRouteSnapshot;
    const result = resolver.resolve(route);
    expect(result).toBeInstanceOf(Observable);
    result.subscribe((data: CoffeeItem) => {
      expect(data).toEqual(coffeeListMock[0]);
    });
  });
});
