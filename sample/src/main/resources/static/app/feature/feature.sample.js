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
const feature_singleton_1 = require("./feature.singleton");
let FeatureSampleComponent = class FeatureSampleComponent {
    constructor(singleton) {
        this.singletonTime = singleton.getTime();
    }
};
FeatureSampleComponent = __decorate([
    core_1.Component({
        selector: "feature-sample",
        directives: [],
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
    }), 
    __metadata('design:paramtypes', [feature_singleton_1.SingletonTimeService])
], FeatureSampleComponent);
exports.FeatureSampleComponent = FeatureSampleComponent;
