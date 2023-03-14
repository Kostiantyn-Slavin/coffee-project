import {NgModule} from '@angular/core';
import {CoffeeListContainerComponent} from './container/coffee-list-container.component';
import {CoffeeItemComponent} from './components/coffee-item/coffee-item.component';
import {CoffeeDetailsComponent} from './components/coffee-details/coffee-details.component';
import {LoaderComponent} from '../shared/components/loader/loader.component';
import {PaginationComponent} from './components/pagination/pagination.component';
import {CommonModule} from '@angular/common';
import {CoffeeRoutingModule} from './coffee-routing.module';

@NgModule({
  declarations: [CoffeeListContainerComponent, CoffeeItemComponent, CoffeeDetailsComponent],
  imports: [CommonModule, LoaderComponent, PaginationComponent, CoffeeRoutingModule],
})
export class CoffeeModule {}
