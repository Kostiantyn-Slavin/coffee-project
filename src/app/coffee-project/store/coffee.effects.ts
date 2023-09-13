import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {iif, of, switchMap, withLatestFrom} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {
  getCoffeeList,
  getCoffeeListError,
  getCoffeeListSuccess,
  getSingleCoffee,
  setSingleCoffee,
} from './coffee.actions';
import {CoffeeService} from '../services/coffee.service';
import {CoffeeItem} from '../definitions/interface/coffee-item.interface';
import {selectCoffeeList} from './coffee.selectors';
import {Store} from '@ngrx/store';
import {CoffeeState} from './coffee.state';

@Injectable()
export class CoffeeEffects {
  constructor(
    private actions$: Actions,
    private coffeeService: CoffeeService,
    private store: Store<CoffeeState>
  ) {}

  getAllCoffee$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getCoffeeList),
      withLatestFrom(this.store.select(selectCoffeeList)),
      switchMap(([, coffeeList]) => {
        return iif(
          () => Boolean(coffeeList?.length),
          of(getCoffeeListSuccess({coffeeList})),
          this.coffeeService.getAllCoffee().pipe(
            map((coffeeList: CoffeeItem[]) => getCoffeeListSuccess({coffeeList})),
            catchError(() => of(getCoffeeListError))
          )
        );
      })
    )
  );

  getSingleCoffee$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getSingleCoffee),
      withLatestFrom(this.store.select(selectCoffeeList)),
      map(([, coffeeList]) => {
        return setSingleCoffee({selectedCoffee: coffeeList[0]});
      })
    )
  );
}
