import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LeftComponent } from './left/left.component';
import { MidComponent } from './mid/mid.component';
import { RightComponent } from './right/right.component';

@NgModule({
  declarations: [
    AppComponent,
    LeftComponent,
    MidComponent,
    RightComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
