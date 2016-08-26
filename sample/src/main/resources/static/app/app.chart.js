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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
const core_1 = require("@angular/core");
const common_component_1 = require("./chart/common.component");
let ChartComponent = class ChartComponent {
    constructor(_commonChartService) {
        this.init = false;
        this._commonChartService = _commonChartService;
    }
    extracted(canvasId, chartData) {
        this.canvas = document.getElementById(canvasId);
        this.ctx = this.canvas.getContext("2d");
        chartData = {
            animation: true
        };
    }
    ngAfterViewChecked() {
        if (this.init == false) {
            this.init = true;
            let barChart;
            this.extracted(this.id, barChart);
            new Chart(this.ctx).Bar(this._commonChartService.BarChartService.getBarData(), this._commonChartService.BarChartService.getBarOpts());
        }
    }
};
__decorate([
    core_1.Input(), 
    __metadata('design:type', String)
], ChartComponent.prototype, "id", void 0);
__decorate([
    core_1.Input(), 
    __metadata('design:type', String)
], ChartComponent.prototype, "type", void 0);
ChartComponent = __decorate([
    core_1.Component({
        selector: "chart",
        template: `
    <canvas id='{{id}}' width='600' height='400'></canvas>
    `
    }),
    __param(0, core_1.Inject(common_component_1.CommonChartService)), 
    __metadata('design:paramtypes', [common_component_1.CommonChartService])
], ChartComponent);
exports.ChartComponent = ChartComponent;
