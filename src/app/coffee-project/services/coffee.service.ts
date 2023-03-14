import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CoffeeItem} from '../definitions/interface/coffee-item.interface';

@Injectable({
  providedIn: 'root',
})
export class CoffeeService {
  private readonly apiUrl = 'https://random-data-api.com/api/coffee/random_coffee';
  private readonly itemsSize = 50;

  constructor(private http: HttpClient) {}

  public getAllCoffee(): Observable<CoffeeItem[]> {
    return this.http.get<CoffeeItem[]>(`${this.apiUrl}?size=${this.itemsSize}`);
  }
}
