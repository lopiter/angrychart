import { NgModule }      from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { routing }        from './app.routing';

import { MainComponent }  from './app.main';
import { ChartDemoComponent }      from './app.demo';
import { CommonChartService } from "./chart/common.component";
import { SingletonTimeService } from "./app.singleton";
import { FeatureModule } from "./feature/feature.module"; 


@NgModule({
  imports:      [ BrowserModule , FormsModule, routing, FeatureModule],
  declarations: [MainComponent, ChartDemoComponent],
  bootstrap:    [ MainComponent ],
  providers : [CommonChartService , SingletonTimeService]

})
export class AppModule { }