import { Component, Inject , Input , AfterViewChecked} from "@angular/core";
import { CommonChartService } from "./chart/common.component";
import {ChartType, ChartModel , BarChartData , ChartData, LineChartData , PieChartData} from "./model";


@Component({
    selector: "chart",
    template: `
    <canvas id='{{model.id}}' width='600' height='400'></canvas>
    `
})

export class ChartComponent implements AfterViewChecked{
    @Input() model: ChartModel
    @Input() data: ChartData
    public ctx: any;
    public canvas: any;
    private chartInstance: ChartInstance;
    private _commonChartService: CommonChartService;
    constructor(@Inject(CommonChartService) _commonChartService: CommonChartService) {
        this._commonChartService = _commonChartService;
    }

    private init = false;

    private extracted(canvasId) {
        this.canvas = <HTMLCanvasElement> document.getElementById(canvasId);
        this.ctx = this.canvas.getContext("2d");
    }

    ngAfterViewChecked() {
        if (this.init === false){
            this.init = true;
            this.extracted(this.model.getId());            
            switch (this.model.getType()){
                case ChartType.BAR :
                    this.chartInstance = new Chart(this.ctx).Bar(this._commonChartService.BarChartService.getBarData(<BarChartData>this.data), this._commonChartService.BarChartService.getBarOpts());
                break;    
                case ChartType.LINE : 
                    this.chartInstance = new Chart(this.ctx).Line(this._commonChartService.lineChartService.getLineData(<LineChartData>this.data), this._commonChartService.lineChartService.getLineOpts());                 
                break;
                case ChartType.PIE : 
                    this.chartInstance = new Chart(this.ctx).Pie(this._commonChartService.pieChartService.getPieData(<PieChartData>this.data), this._commonChartService.pieChartService.getPieOpts());                 
                break;                
            }            
        }        
    }

    
}