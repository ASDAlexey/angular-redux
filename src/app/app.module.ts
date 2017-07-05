import { BrowserModule } from '@angular/platform-browser';
import { NgModule, isDevMode } from '@angular/core';

import { AppComponent } from './app.component';
import { NgRedux, NgReduxModule, DevToolsExtension } from 'ng2-redux';
import { fromJS, Map } from 'immutable';
import { INITIAL_STATE, rootReducer } from './store';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgReduxModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(ngRedux: NgRedux<Map<string, any>>, devTools: DevToolsExtension) {
    const enhancer = isDevMode() ? [devTools.enhancer()] : [];
    ngRedux.configureStore(rootReducer, fromJS(INITIAL_STATE), [], enhancer);
  }
}
