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
const app_chart_1 = require("./app.chart");
const model_1 = require("./model");
let ChartDemoComponent = class ChartDemoComponent {
    constructor() {
        this.barChart = new model_1.ChartModel(model_1.ChartType.BAR, "bar");
        this.barChartData = new model_1.BarChartData(["January", "February", "March", "April", "May", "June", "July"], [65, 59, 80, 81, 56, 55, 40]);
        this.lineChart = new model_1.ChartModel(model_1.ChartType.LINE, "line");
        this.lineChartData = new model_1.LineChartData(["January", "February", "March", "April", "May", "June", "July"], [65, 59, 80, 81, 56, 55, 40]);
        this.pieChart = new model_1.ChartModel(model_1.ChartType.PIE, "pie");
        this.pieChartData = new model_1.PieChartData(["Red", "Green", "Yellow"], [300, 50, 100], ["#F7464A", "#46BFBD", "#FDB45C"], ["#FF5A5E", "#5AD3D1", "#FFC870"]);
    }
};
ChartDemoComponent = __decorate([
    core_1.Component({
        directives: [app_chart_1.ChartComponent],
        template: `
    <section>     
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 text-center">
                        <h2>BARCHART</h2>
                        <hr class="star-primary">
                    </div>
                </div>
                <div class="row" align = "center">
                <chart [model]="barChart" [data]="barChartData"></chart>
                </div>
            </div>
    </section>
    <section>     
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 text-center">
                        <h2>LINECHART</h2>
                        <hr class="star-primary">
                    </div>
                </div>
                <div class="row" align = "center">
                <chart [model]="lineChart" [data]="lineChartData"></chart>
                </div>
            </div>
    </section> 
    <section>     
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 text-center">
                        <h2>PIECHART</h2>
                        <hr class="star-primary">
                    </div>
                </div>
                <div class="row" align = "center">
                <chart [model]="pieChart" [data]="pieChartData"></chart>
                </div>
            </div>
    </section>              
    `
    }), 
    __metadata('design:paramtypes', [])
], ChartDemoComponent);
exports.ChartDemoComponent = ChartDemoComponent;
