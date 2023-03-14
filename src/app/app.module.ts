import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {EffectsModule} from '@ngrx/effects';
import {StoreModule} from '@ngrx/store';
import {StoreRouterConnectingModule} from '@ngrx/router-store';
import {AppComponent} from './app.component';
import {CoffeeModule} from './coffee-project/coffee.module';
import {effects, reducers} from './store';
import {AppRoutingModule} from './app.routing.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    CoffeeModule,
    StoreModule.forRoot(reducers, {
      runtimeChecks: {strictStateImmutability: false, strictActionImmutability: false},
    }),
    EffectsModule.forRoot(effects),
    StoreDevtoolsModule.instrument({name: 'Coffee project'}),
    StoreRouterConnectingModule.forRoot(),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
