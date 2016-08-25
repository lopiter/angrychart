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
let FooterSectionComponent = class FooterSectionComponent {
};
__decorate([
    core_1.Input(), 
    __metadata('design:type', String)
], FooterSectionComponent.prototype, "title", void 0);
FooterSectionComponent = __decorate([
    core_1.Component({
        selector: "footer-section",
        template: `
<footer class="text-center">
        <div class="footer-above">
            <div class="container">
                <div class="row">
                    <div class="footer-col col-md-4">
                        <h3>Location</h3>
                        <p>11, Hwangsaeul-ro 359beon-gil, 
                            <br>Bundang-gu, Seongnam-si, Gyeonggi-do
                        </p>
                    </div>
                    
                    <div class="footer-col col-md-4">
                        <h3>About Angry Chart</h3>
                        <p>AngryChart is a free to use, open source Bootstrap Freelance theme</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer-below">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        Copyright &copy; NOP 2016
                    </div>
                </div>
            </div>
        </div>
    </footer>
    `
    }), 
    __metadata('design:paramtypes', [])
], FooterSectionComponent);
exports.FooterSectionComponent = FooterSectionComponent;
