import {Component , Input} from "@angular/core";
import {ImageModel} from "./model";

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
                    <a href="#{{chart.id}}" class="portfolio-link" data-toggle="modal">
                        <div class="caption">
                            <div class="caption-content">
                                <i class="fa fa-search-plus fa-3x"></i>
                            </div>
                        </div>
                        <img src="{{chart.url}}" class="img-responsive" alt="">
                    </a>
                </div>
            </div>
        </div>
    </section>

    <!-- Portfolio Modals -->
    <div class="portfolio-modal modal fade" id="{{chart.id}}" tabindex="-1" role="dialog" aria-hidden="true" *ngFor="let chart of charts;">
        <div class="modal-content">
            <div class="close-modal" data-dismiss="modal">
                <div class="lr">
                    <div class="rl">
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="row">
                    <div class="col-lg-8 col-lg-offset-2">
                        <div class="modal-body">
                            <h2>{{chart.title}}</h2>
                            <hr class="star-primary">
                            <img src="{{chart.url}}" class="img-responsive img-centered" alt="">
                            <p [innerHTML]="chart.description"></p>
                            <button type="button" class="btn btn-default" data-dismiss="modal"><i class="fa fa-times"></i> Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `
})

export class ImageSectionComponent {
    @Input() title: string;
    @Input() charts : ImageModel[];
}