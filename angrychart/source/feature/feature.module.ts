import { NgModule }      from '@angular/core';
import { CommonModule }       from '@angular/common';
import {MakemeBlueDirective} from "./feature.makemeblue";
import {FeatureSampleComponent} from "./feature.sample";
import {SingletonTimeService} from "./feature.singleton";


@NgModule({
  declarations: [FeatureSampleComponent, MakemeBlueDirective],
  providers : [SingletonTimeService],
  exports : [FeatureSampleComponent]
})
export class FeatureModule { }