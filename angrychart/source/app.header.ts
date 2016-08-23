import {Component , Input} from "@angular/core";

@Component({
    selector: "header",
    template: `
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <img class="img-responsive" src="img/profile.png" alt="">
                    <div class="intro-text">
                        <span class="name">{{title}}</span>
                        <hr class="star-light">
                        <span class="skills">{{description}}</span>
                    </div>
                </div>
            </div>
        </div>
    `
})

export class HeaderComponent {
    @Input() title: string;
    @Input() description: string;
}