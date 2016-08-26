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
const ng2_bootstrap_1 = require('ng2-bootstrap/ng2-bootstrap');
const common_1 = require('@angular/common');
let ChartComponent = class ChartComponent {
    constructor(_commonChartService) {
        this._commonChartService = _commonChartService;
    }
    extracted(canvasId, chartData) {
        this.canvas = document.getElementById(canvasId);
        this.ctx = this.canvas.getContext("2d");
        chartData = {
            animation: true
        };
    }
    showBarChart() {
        let barChart;
        this.extracted("chart1", barChart);
        new Chart(this.ctx).Bar(this._commonChartService.BarChartService.getBarData(), this._commonChartService.BarChartService.getBarOpts());
    }
    showLineChart() {
        let lineChart;
        this.extracted("chart3", lineChart);
        new Chart(this.ctx).Line(this._commonChartService.lineChartService.getLineData(), this._commonChartService.lineChartService.getLineOpts());
    }
    showRadarChart() {
        let radarChart;
        this.extracted("chart4", radarChart);
        new Chart(this.ctx).Radar(this._commonChartService.radarChartService.getRadarData(), this._commonChartService.radarChartService.getRadarOpts());
    }
    showPieChart() {
        let pieChart;
        this.extracted("chart5", pieChart);
        new Chart(this.ctx).Pie(this._commonChartService.pieChartService.getPieData(), this._commonChartService.pieChartService.getPieOpts());
    }
    showPolarAreaChart() {
        let polarAreaChart;
        this.extracted("chart6", polarAreaChart);
        new Chart(this.ctx).Pie(this._commonChartService.polarAreaChartService.getPolarAreaData(), this._commonChartService.polarAreaChartService.getPolarAreaOpts());
    }
};
ChartComponent = __decorate([
    core_1.Component({
        selector: 'chart',
        providers: [common_component_1.CommonChartService],
        directives: [ng2_bootstrap_1.AlertComponent, common_1.CORE_DIRECTIVES],
        template: `
        <alert>This is Bar Chart</alert>
        <button [class]="hwClass" (click)="showBarChart()">show bar chart</button>
        <br />
        <canvas id='chart1' width='600' height='400'></canvas>
        <br />
        <alert>This is Line Chart</alert>
        <button [class]="hwClass" (click)="showLineChart()">show line chart</button>
        <br />
        <canvas id='chart3' width='600' height='400'></canvas>
        <br />
        <alert>This is Radarar Chart</alert>
        <button [class]="hwClass" (click)="showRadarChart()">show radar chart</button>
        <br />
        <canvas id='chart4' width='600' height='400'></canvas>
        <br />
        <alert>This is Pie Chart</alert>
        <button [class]="hwClass" (click)="showPieChart()">show Pie Chart</button>
        <br />
        <canvas id='chart5' width='600' height='400'></canvas>
        <br />
        <alert>This is Polar Chart</alert>
        <button [class]="hwClass" (click)="showPolarAreaChart()">show PolarArea Chart</button>
        <br />
        <canvas id='chart6' width='600' height='400'></canvas>
        <br />
  `
    }),
    __param(0, core_1.Inject(common_component_1.CommonChartService)), 
    __metadata('design:paramtypes', [common_component_1.CommonChartService])
], ChartComponent);
exports.ChartComponent = ChartComponent;
//# sourceMappingURL=app.chart.js.map