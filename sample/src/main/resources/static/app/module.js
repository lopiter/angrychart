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
const core_1 = require('@angular/core');
const forms_1 = require('@angular/forms');
const platform_browser_1 = require('@angular/platform-browser');
const app_routing_1 = require('./app.routing');
const app_main_1 = require('./app.main');
const app_demo_1 = require('./app.demo');
const common_component_1 = require("./chart/common.component");
const app_singleton_1 = require("./app.singleton");
const feature_module_1 = require("./feature/feature.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, app_routing_1.routing, feature_module_1.FeatureModule],
        declarations: [app_main_1.MainComponent, app_demo_1.ChartDemoComponent],
        bootstrap: [app_main_1.MainComponent],
        providers: [common_component_1.CommonChartService, app_singleton_1.SingletonTimeService]
    }), 
    __metadata('design:paramtypes', [])
], AppModule);
exports.AppModule = AppModule;
