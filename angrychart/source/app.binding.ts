import {Component , Input } from "@angular/core";


@Component({
    selector: "binding-sample",
    template: `
        <section class="success">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 text-center">
                        <h2>{{title}}</h2>
                        <hr class="star-light">
                    </div>
                </div>
                <div class="row">
                     <div class="row" align = "center">
                        <p>{{interpolation}}</p> 
                        <p (click)="clickme()">event binding</p>
                        <input type="text" [(ngModel)]="copyme" style="color:black;"/>
                        <p>copy from textbox : {{copyme}}</p>
                        <button class="btn btn-success btn-lg" (click)="changemodel()">ChangeModel</button>
                    </div>
                </div>
            </div>
        </section>   
    `
})

export class BindingSampleComponent {
    @Input() title : string
    private interpolation : string = "I'm interpolation binding"
    private copyme : string

    clickme(){
        alert("CLICK ME!!")
    }

    changemodel(){
        this.copyme = "I'm Changed"
    }

}