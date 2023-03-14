import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CoffeeListContainerComponent} from './container/coffee-list-container.component';
import {CoffeeDetailsComponent} from './components/coffee-details/coffee-details.component';
import {CoffeeDetailsResolver} from './services/coffee-details.resolver';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'coffee',
    pathMatch: 'full',
  },
  {
    path: 'coffee',
    component: CoffeeListContainerComponent,
  },
  {
    path: 'coffee/:id',
    component: CoffeeDetailsComponent,
    resolve: {
      selectedCoffee: CoffeeDetailsResolver,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoffeeRoutingModule {}
