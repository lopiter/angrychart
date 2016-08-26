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
let ChildComponent = class ChildComponent {
    constructor() {
        this.onComponentValueChange = new core_1.EventEmitter();
    }
    componentValueChanged() {
        console.log(this.onComponentValueChange);
        this.onComponentValueChange.emit(this.comopnentValue);
    }
};
__decorate([
    core_1.Input(), 
    __metadata('design:type', String)
], ChildComponent.prototype, "componentName", void 0);
__decorate([
    core_1.Output(), 
    __metadata('design:type', core_1.EventEmitter)
], ChildComponent.prototype, "onComponentValueChange", void 0);
ChildComponent = __decorate([
    core_1.Component({ selector: "child-component",
        template: `<h2>{{componentName}}</h2>
            <input type="text" [(ngModel)]="comopnentValue"/>
            <input type="button" (click)="componentValueChanged()"/>
 `
    }), 
    __metadata('design:paramtypes', [])
], ChildComponent);
exports.ChildComponent = ChildComponent;
//# sourceMappingURL=app.child.js.map