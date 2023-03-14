import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {of} from 'rxjs';
import {catchError, map, mergeMap} from 'rxjs/operators';
import {
  getCoffeeById,
  getCoffeeList,
  getCoffeeListError,
  getCoffeeListSuccess,
  getCoffeeByIdSuccess,
  getCoffeeByIdError,
} from './coffee.actions';
import {CoffeeService} from '../services/coffee.service';
import {CoffeeItem} from '../definitions/interface/coffee-item.interface';

@Injectable()
export class CoffeeEffects {
  constructor(private actions$: Actions, private coffeeService: CoffeeService) {}

  getAllCoffee$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getCoffeeList),
      mergeMap(() =>
        this.coffeeService.getAllCoffee().pipe(
          map((coffeeList: CoffeeItem[]) => getCoffeeListSuccess({coffeeList})),
          catchError(() => of(getCoffeeListError))
        )
      )
    )
  );

  getCoffeeById$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getCoffeeById),
      mergeMap(({selectedId}) =>
        this.coffeeService.getCoffeeById(selectedId).pipe(
          map((selectedCoffee: CoffeeItem) => getCoffeeByIdSuccess({selectedCoffee})),
          catchError(() => of(getCoffeeByIdError))
        )
      )
    )
  );
}
