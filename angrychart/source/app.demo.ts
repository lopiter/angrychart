import {Component} from "@angular/core";
import {ChartComponent} from "./app.chart";


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
                <div class="row">
                <chart [id]="'line'"></chart>
                </div>
            </div>
        </section>
    `
})

export class ChartDemoComponent {
    
}