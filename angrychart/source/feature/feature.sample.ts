import {Component} from "@angular/core";

import {SingletonTimeService} from "./feature.singleton";


@Component({
    selector: "feature-sample",
    directives : [],
    template: `
    <section>     
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 text-center">
                        <h2>NGMODULE</h2>
                        <hr class="star-primary">
                    </div>
                </div>
                <div class="row" align = "center">
                    <p>I'm not part of you</p>
                    <p [makemeblue]="'blue'">Directives make me blue!!</p>
                    <p>{{singletonTime}}</p>                     
                </div>
            </div>
    </section>     
    `
})

export class FeatureSampleComponent {
    private singletonTime : string;    
    private notsingletonTime : string;    
    constructor(singleton : SingletonTimeService ){
       this.singletonTime = singleton.getTime();
   }
}