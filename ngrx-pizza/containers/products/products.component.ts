// Imports above

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import * as fromStore from '../../store';
import { Pizza } from '../../models/pizza.model';

// @Component() below

export class ProductsComponent implements OnInit {
    pizzas$: Observable<Pizza[]>;

    constructor(private store: Store<fromStore.ProductState>) {}

    ngOnInit() {
        this.pizzas$ = this.store.select(fromStore.getAllPizzas);
        this.store.dispatch(new fromStore.LoadPizzas());
    }
}
