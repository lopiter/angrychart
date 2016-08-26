import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routing }        from './app.routing';

import { MainComponent }  from './app.main';
import { ChartDemoComponent }      from './app.demo';
import { CommonChartService } from "./chart/common.component";

@NgModule({
  imports:      [ BrowserModule , routing],
  declarations: [MainComponent, ChartDemoComponent],
  bootstrap:    [ MainComponent ],
  providers : [CommonChartService]

})
export class AppModule { }