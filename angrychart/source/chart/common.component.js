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
const bar_component_1 = require("./bar.component");
const line_component_1 = require("./line.component");
const radar_component_1 = require("./radar.component");
const pie_component_1 = require("./pie.component");
const polarArea_component_1 = require("./polarArea.component");
let CommonChartService = class CommonChartService {
    constructor() {
        this._BarChartService = new bar_component_1.BarChartService();
        this._lineChartService = new line_component_1.LineChartService();
        this._radarChartService = new radar_component_1.RadarChartService();
        this._pieChartService = new pie_component_1.PieChartService();
        this._polarAreaChartService = new polarArea_component_1.PolarAreaChartService();
    }
    get BarChartService() {
        return this._BarChartService;
    }
    set BarChartService(value) {
        this._BarChartService = value;
    }
    get lineChartService() {
        return this._lineChartService;
    }
    set lineChartService(value) {
        this._lineChartService = value;
    }
    get radarChartService() {
        return this._radarChartService;
    }
    set radarChartService(value) {
        this._radarChartService = value;
    }
    get pieChartService() {
        return this._pieChartService;
    }
    set pieChartService(value) {
        this._pieChartService = value;
    }
    get polarAreaChartService() {
        return this._polarAreaChartService;
    }
    set polarAreaChartService(value) {
        this._polarAreaChartService = value;
    }
};
CommonChartService = __decorate([
    core_1.Injectable(), 
    __metadata('design:paramtypes', [])
], CommonChartService);
exports.CommonChartService = CommonChartService;
//# sourceMappingURL=common.component.js.map