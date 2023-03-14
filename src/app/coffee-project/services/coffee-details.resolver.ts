import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve} from '@angular/router';
import {CoffeeItem} from '../definitions/interface/coffee-item.interface';
import {Store} from '@ngrx/store';
import {CoffeeState} from '../store/coffee.state';
import {filter, Observable} from 'rxjs';
import {getCoffeeById} from '../store/coffee.actions';
import {getSelectedCoffee} from '../store/coffee.selectors';

@Injectable({
  providedIn: 'root',
})
export class CoffeeDetailsResolver implements Resolve<CoffeeItem> {
  constructor(private store: Store<CoffeeState>) {}

  public resolve(route: ActivatedRouteSnapshot): Observable<CoffeeItem> {
    const selectedId = Number(route.paramMap.get('id'));
    this.store.dispatch(getCoffeeById({selectedId}));
    return this.store.select(getSelectedCoffee).pipe(filter(Boolean)) as Observable<CoffeeItem>;
  }
}
