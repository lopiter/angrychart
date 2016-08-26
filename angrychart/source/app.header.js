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
let HeaderComponent = class HeaderComponent {
};
__decorate([
    core_1.Input(), 
    __metadata('design:type', String)
], HeaderComponent.prototype, "title", void 0);
__decorate([
    core_1.Input(), 
    __metadata('design:type', String)
], HeaderComponent.prototype, "description", void 0);
HeaderComponent = __decorate([
    core_1.Component({
        selector: "header",
        template: `
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <img class="img-responsive" src="img/profile.png" alt="">
                    <div class="intro-text">
                        <span class="name">{{title}}</span>
                        <hr class="star-light">
                        <span class="skills">{{description}}</span>
                    </div>
                </div>
            </div>
        </div>
    `
    }), 
    __metadata('design:paramtypes', [])
], HeaderComponent);
exports.HeaderComponent = HeaderComponent;
//# sourceMappingURL=app.header.js.map