// Imports above

import { StoreModule } from '@ngrx/store'; // Add to router via StoreModule.forFeature()
import { EffectsModule } from '@ngrx/effects';

import { reducers, effects } from './store';

// Components, containers, services, and routes below

@NgModule({
  imports: [
    // Other modules here
    StoreModule.forFeature('products', reducers),
    EffectsModule.forFeature(effects)
  ],
  providers: [],
  declarations: [],
  exports: []
})
export class ProductsModule {}
