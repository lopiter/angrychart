import {Component} from "@angular/core";
import {ChartComponent} from "./app.chart";
import {ChartType, ChartModel , BarChartData , ChartData , LineChartData , PieChartData} from "./model";


@Component({
    directives : [ChartComponent],
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
})

export class ChartDemoComponent {
    private barChart : ChartModel = new ChartModel(ChartType.BAR , "bar" );
    private barChartData: BarChartData = new BarChartData(
        ["January", "February", "March", "April", "May", "June", "July"],
        [65, 59, 80, 81, 56, 55, 40]
    );
    private lineChart : ChartModel = new ChartModel(ChartType.LINE , "line" );
    private lineChartData: LineChartData = new LineChartData(
        ["January", "February", "March", "April", "May", "June", "July"],
        [65, 59, 80, 81, 56, 55, 40]
    );    
    private pieChart : ChartModel = new ChartModel(ChartType.PIE , "pie" );
    private pieChartData : PieChartData = new PieChartData(
        ["Red" , "Green" , "Yellow"],
        [300 , 50 , 100],
        ["#F7464A" , "#46BFBD" , "#FDB45C"],
        ["#FF5A5E" , "#5AD3D1" , "#FFC870"]
    ); 
        
}