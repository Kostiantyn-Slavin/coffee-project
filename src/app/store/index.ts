import {CoffeeState} from '../coffee-project/store/coffee.state';
import {CoffeeEffects} from '../coffee-project/store/coffee.effects';
import {ActionReducerMap} from '@ngrx/store';
import {coffeeReducer} from '../coffee-project/store/coffee.reducer';

export interface AppState {
  coffeeState: CoffeeState;
}

export const reducers: ActionReducerMap<AppState> = {
  coffeeState: coffeeReducer,
};

export const effects = [CoffeeEffects];
