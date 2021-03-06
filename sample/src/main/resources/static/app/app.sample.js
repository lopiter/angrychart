"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const core_1 = require("@angular/core");
const app_makemered_1 = require("./app.makemered");
const app_singleton_1 = require("./app.singleton");
const app_notsingleton_1 = require("./app.notsingleton");
const app_binding_1 = require("./app.binding");
let SampleComponent = class SampleComponent {
    constructor(singleton, notsingleton) {
        this.singletonTime = singleton.getTime();
        this.notsingletonTime = notsingleton.getTime();
    }
};
SampleComponent = __decorate([
    core_1.Component({
        selector: "sample",
        directives: [app_makemered_1.MakemeRedDirective, app_binding_1.BindingSampleComponent],
        providers: [app_notsingleton_1.NotSingletonTimeService],
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
    }), 
    __metadata('design:paramtypes', [app_singleton_1.SingletonTimeService, app_notsingleton_1.NotSingletonTimeService])
], SampleComponent);
exports.SampleComponent = SampleComponent;
