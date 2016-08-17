import { Component, Inject } from "@angular/core";
import { CommonChartService } from "./chart/common.component";

@Component({
    selector: 'chart',
    providers: [CommonChartService],
    template: `
        <button [class]="hwClass" (click)="showBarChart()">show bar chart</button>
        <br />
        <canvas id='chart1' width='600' height='400'></canvas>
        <br />
        <button [class]="hwClass" (click)="showLineChart()">show line chart</button>
        <br />
        <canvas id='chart3' width='600' height='400'></canvas>
        <br />
        <button [class]="hwClass" (click)="showRadarChart()">show radar chart</button>
        <br />
        <canvas id='chart4' width='600' height='400'></canvas>
        <br />
        <button [class]="hwClass" (click)="showPieChart()">show Pie Chart</button>
        <br />
        <canvas id='chart5' width='600' height='400'></canvas>
        <br />
        <button [class]="hwClass" (click)="showPolarAreaChart()">show PolarArea Chart</button>
        <br />
        <canvas id='chart6' width='600' height='400'></canvas>
        <br />
  `
})
export class ChartComponent{
    public ctx: any;
    public canvas: any;
    private _commonChartService: CommonChartService;
    constructor(@Inject(CommonChartService) _commonChartService: CommonChartService) {
        this._commonChartService = _commonChartService;
    }

    private extracted(canvasId, chartData) {
        this.canvas = <HTMLCanvasElement> document.getElementById(canvasId);
        this.ctx = this.canvas.getContext("2d");
        chartData = {
            animation: true
        }
    }

    public showBarChart(): void{
        let barChart: ChartInstance;
        this.extracted("chart1", barChart);
        new Chart(this.ctx).Bar(this._commonChartService.BarChartService.getBarData(), this._commonChartService.BarChartService.getBarOpts());
    }

    public showLineChart() {
        let lineChart: LinearInstance;
        this.extracted("chart3", lineChart);
        new Chart(this.ctx).Line(this._commonChartService.lineChartService.getLineData(), this._commonChartService.lineChartService.getLineOpts());
    }

    public showRadarChart() {
        let radarChart: ChartInstance;
        this.extracted("chart4", radarChart);
        new Chart(this.ctx).Radar(this._commonChartService.radarChartService.getRadarData(), this._commonChartService.radarChartService.getRadarOpts());
    }

    public showPieChart() {
        let pieChart: CircularInstance;
        this.extracted("chart5", pieChart);
        new Chart(this.ctx).Pie(this._commonChartService.pieChartService.getPieData(), this._commonChartService.pieChartService.getPieOpts());
    }

    public showPolarAreaChart() {
        let polarAreaChart: CircularInstance;
        this.extracted("chart6", polarAreaChart);
        new Chart(this.ctx).Pie(this._commonChartService.polarAreaChartService.getPolarAreaData(), this._commonChartService.polarAreaChartService.getPolarAreaOpts());
    }

}