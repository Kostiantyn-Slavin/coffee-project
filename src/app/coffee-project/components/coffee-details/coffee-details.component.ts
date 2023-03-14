import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CoffeeItem} from '../../definitions/interface/coffee-item.interface';

@Component({
  selector: 'app-coffee-details',
  templateUrl: './coffee-details.component.html',
  styleUrls: ['./coffee-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CoffeeDetailsComponent implements OnInit {
  public coffeeDetails: CoffeeItem = {} as CoffeeItem;

  constructor(private route: ActivatedRoute) {}

  public ngOnInit(): void {
    this.coffeeDetails = this.route.snapshot?.data['selectedCoffee'];
  }
}
