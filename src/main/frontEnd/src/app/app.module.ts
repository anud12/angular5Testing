import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {DemoComponent} from "./demo/demo.component";
import {ComponentService} from "./component.service";
import {HttpClientModule} from "@angular/common/http";
import {CommonModule} from "@angular/common";


@NgModule({
  declarations: [
    AppComponent,
    DemoComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule
  ],
  providers: [ComponentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
