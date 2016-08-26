import { Component, Inject ,Input ,AfterViewChecked} from "@angular/core";
import { CommonChartService } from "./chart/common.component";


@Component({
    selector: "chart",
    template: `
    <canvas id='{{id}}' width='600' height='400'></canvas>
    `
})

export class ChartComponent implements AfterViewChecked{
    public ctx: any;
    public canvas: any;
    private _commonChartService: CommonChartService;
    constructor(@Inject(CommonChartService) _commonChartService: CommonChartService) {
        this._commonChartService = _commonChartService;
    }

    private init = false;

    private extracted(canvasId, chartData) {
        this.canvas = <HTMLCanvasElement> document.getElementById(canvasId);
        this.ctx = this.canvas.getContext("2d");
        chartData = {
            animation: true
        }
    }

    ngAfterViewChecked() {
        if(this.init == false){
        this.init = true;    
        let barChart: ChartInstance;
        this.extracted(this.id, barChart);
        new Chart(this.ctx).Bar(this._commonChartService.BarChartService.getBarData(), this._commonChartService.BarChartService.getBarOpts());
        }        
    }

    @Input() id: string
    @Input() type: string
}