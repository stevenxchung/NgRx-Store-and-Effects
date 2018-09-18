// Imports above

import { StoreModule } from '@ngrx/store'; // Add to router via StoreModule.forFeature()
import { reducers } from './store';

// Components, containers, services, and routes below

@NgModule({
  imports: [
    // Other modules here
    StoreModule.forFeature('products', reducers)
  ],
  providers: [],
  declarations: [],
  exports: []
})
export class ProductsModule {}
