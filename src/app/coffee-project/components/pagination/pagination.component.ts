import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {Store} from '@ngrx/store';
import {CoffeeState} from '../../store/coffee.state';
import {decreaseCurrentPage, increaseCurrentPage, setCurrentPage} from '../../store/coffee.actions';
import {selectCurrentPage} from '../../store/coffee.selectors';
import {CoffeeItem} from 'src/app/coffee-project/definitions/interface/coffee-item.interface';
import {CommonModule} from '@angular/common';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PaginationComponent {
  @Input()
  public set coffeeList(list: CoffeeItem[] | null) {
    if (list?.length) {
      this.maxIndex = Math.ceil(list.length / this.itemsPerPage);
      this.pageNumbers = Array.from({length: this.maxIndex}, (value, index) => index);
    }
  }

  public readonly currentPage$ = this.store.select(selectCurrentPage);

  public pageNumbers: number[] = [];
  public maxIndex = 0;

  private readonly itemsPerPage = 10;

  constructor(private store: Store<CoffeeState>) {}

  public goToPage(page: number): void {
    this.store.dispatch(setCurrentPage({page}));
  }

  public nextPage(): void {
    this.store.dispatch(increaseCurrentPage());
  }

  public prevPage(): void {
    this.store.dispatch(decreaseCurrentPage());
  }
}
