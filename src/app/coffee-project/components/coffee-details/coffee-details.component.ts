import {ChangeDetectionStrategy, Component} from '@angular/core';
import {CoffeeItem} from '../../definitions/interface/coffee-item.interface';
import {filter, Observable} from 'rxjs';
import {getSelectedCoffee} from '../../store/coffee.selectors';
import {select, Store} from '@ngrx/store';
import {CoffeeState} from '../../store/coffee.state';

@Component({
  selector: 'app-coffee-details',
  templateUrl: './coffee-details.component.html',
  styleUrls: ['./coffee-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CoffeeDetailsComponent {
  public coffeeDetails$: Observable<CoffeeItem> = this.store.pipe(
    select(getSelectedCoffee),
    filter(Boolean)
  );

  constructor(private store: Store<CoffeeState>) {}
}
