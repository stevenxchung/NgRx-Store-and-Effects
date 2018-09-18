import { ActionReducerMap } from '@ngrx/store';
import * as fromPizzas from './pizzas.reducers';

export interface ProductState {
  pizzas: fromPizzas.PizzaState;
}

export const reducers: ActionReducerMap<ProductState> = {
  pizzas: fromPizzas.reducer
};
