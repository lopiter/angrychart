import {Component , Input} from "@angular/core";

@Component({
    selector: "img-section",
    template: `
    <section id="portfolio">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 text-center">
                    <h2>{{title}}</h2>
                    <hr class="star-primary">
                </div>
            </div>
            <div class="row">
                <div class="col-sm-4 portfolio-item" *ngFor="let chart of charts;">
                    <a href="#portfolioModal1" class="portfolio-link" data-toggle="modal">
                        <div class="caption">
                            <div class="caption-content">
                                <i class="fa fa-search-plus fa-3x"></i>
                            </div>
                        </div>
                        <img src="{{chart.img}}" class="img-responsive" alt="">
                    </a>
                </div>
            </div>
        </div>
    </section>
    `
})

export class ImageSectionComponent {
    @Input() title: string;
    @Input() charts : any[];
}