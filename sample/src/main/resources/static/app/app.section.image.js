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
let ImageSectionComponent = class ImageSectionComponent {
};
__decorate([
    core_1.Input(), 
    __metadata('design:type', String)
], ImageSectionComponent.prototype, "title", void 0);
__decorate([
    core_1.Input(), 
    __metadata('design:type', Array)
], ImageSectionComponent.prototype, "charts", void 0);
ImageSectionComponent = __decorate([
    core_1.Component({
        selector: "img-section",
        template: `
    <section id="portfolio">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 text-center">
                    <h2>{{title}}</h2>
                    <hr class="star-primary">
                </div>
            </div>
            <div class="row">
                <div class="col-sm-4 portfolio-item" *ngFor="let chart of charts;">
                    <a href="#portfolioModal1" class="portfolio-link" data-toggle="modal">
                        <div class="caption">
                            <div class="caption-content">
                                <i class="fa fa-search-plus fa-3x"></i>
                            </div>
                        </div>
                        <img src="{{chart.img}}" class="img-responsive" alt="">
                    </a>
                </div>
            </div>
        </div>
    </section>
    `
    }), 
    __metadata('design:paramtypes', [])
], ImageSectionComponent);
exports.ImageSectionComponent = ImageSectionComponent;
