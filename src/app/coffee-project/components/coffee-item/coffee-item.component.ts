import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {Router} from '@angular/router';

import {Store} from '@ngrx/store';
import {CoffeeState} from '../../store/coffee.state';
import {CoffeeItem} from '../../definitions/interface/coffee-item.interface';
import {setSelectedCoffee} from '../../store/coffee.actions';

@Component({
  selector: 'app-coffee-item',
  templateUrl: './coffee-item.component.html',
  styleUrls: ['./coffee-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CoffeeItemComponent {
  @Input()
  public coffeeItem: CoffeeItem | undefined;

  constructor(private store: Store<CoffeeState>, private router: Router) {}

  public goToSelectedCoffee(selectedCoffee: CoffeeItem): void {
    this.store.dispatch(setSelectedCoffee({selectedCoffee}));
    this.router.navigate(['/coffee', selectedCoffee.id]);
  }
}
