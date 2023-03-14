import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';

import {filter} from 'rxjs';
import {getCoffeeList} from '../store/coffee.actions';
import {getLoaderStatus, getSlicedCoffeeList, selectCoffeeList} from '../store/coffee.selectors';
import {CoffeeItem} from '../definitions/interface/coffee-item.interface';
import {AppState} from '../../store';

@Component({
  selector: 'app-coffee-list',
  templateUrl: './coffee-list-container.component.html',
  styleUrls: ['./coffee-list-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CoffeeListContainerComponent implements OnInit {
  public readonly devName = 'Kostiantyn Slavin';
  public readonly coffeeList$ = this.store.pipe(
    select(selectCoffeeList),
    filter((data) => !!data?.length)
  );
  public readonly slicedCoffeeList$ = this.store.select(getSlicedCoffeeList);
  public readonly loaderStatus$ = this.store.select(getLoaderStatus);

  constructor(private store: Store<AppState>) {}

  public ngOnInit(): void {
    this.store.dispatch(getCoffeeList());
  }

  public trackById(index: number, item: CoffeeItem): number {
    return item?.id as number;
  }
}
