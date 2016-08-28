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
let BindingSampleComponent = class BindingSampleComponent {
    constructor() {
        this.interpolation = "I'm interpolation binding";
    }
    clickme() {
        alert("CLICK ME!!");
    }
    changemodel() {
        this.copyme = "I'm Changed";
    }
};
__decorate([
    core_1.Input(), 
    __metadata('design:type', String)
], BindingSampleComponent.prototype, "title", void 0);
BindingSampleComponent = __decorate([
    core_1.Component({
        selector: "binding-sample",
        template: `
        <section class="success">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 text-center">
                        <h2>{{title}}</h2>
                        <hr class="star-light">
                    </div>
                </div>
                <div class="row">
                     <div class="row" align = "center">
                        <p>{{interpolation}}</p> 
                        <p (click)="clickme()">event binding</p>
                        <input type="text" [(ngModel)]="copyme" style="color:black;"/>
                        <p>copy from textbox : {{copyme}}</p>
                        <button class="btn btn-success btn-lg" (click)="changemodel()">ChangeModel</button>
                    </div>
                </div>
            </div>
        </section>   
    `
    }), 
    __metadata('design:paramtypes', [])
], BindingSampleComponent);
exports.BindingSampleComponent = BindingSampleComponent;
