import {Component} from "@angular/core";
import {MakemeRedDirective} from "./app.makemered";
import {SingletonTimeService} from "./app.singleton";
import {NotSingletonTimeService} from "./app.notsingleton";
import {BindingSampleComponent} from "./app.binding";


@Component({
    selector: "sample",
    directives: [MakemeRedDirective, BindingSampleComponent],
    providers: [NotSingletonTimeService],
    template: `
    <section>     
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 text-center">
                        <h2>COMPONENT</h2>
                        <hr class="star-primary">
                    </div>
                </div>
                <div class="row" align = "center">
                    <p>This is Component</p>
                    <p>I have Template And Controller</p>
                </div>
            </div>
    </section>
    <section class="success">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 text-center">
                        <h2>DIRECTIVES</h2>
                        <hr class="star-light">
                    </div>
                </div>
                <div class="row">
                     <div class="row" align = "center">
                        <p [makemered]="'red'">Directives make me special</p>                    
                    </div>
                </div>
            </div>
        </section>
        <section>     
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12 text-center">
                            <h2>Service</h2>
                            <hr class="star-primary">
                        </div>
                    </div>
                    <div class="row" align = "center">
                        <p>Singleton Service Time is : {{singletonTime}}</p>
                        <p>NotSingleton Service Time is : {{notsingletonTime}}</p>
                    </div>
                </div>
        </section>
        <feature-sample></feature-sample>
        <binding-sample [title]="'BINDING'"></binding-sample>              
    `
})

export class SampleComponent {
    private singletonTime : string;    
    private notsingletonTime : string;    
    constructor(singleton : SingletonTimeService , notsingleton : NotSingletonTimeService){
       this.singletonTime = singleton.getTime();
       this.notsingletonTime = notsingleton.getTime();
   }
}