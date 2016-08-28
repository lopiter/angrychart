import {Component , Input} from "@angular/core";

@Component({
    selector: "about-section",
    template: `
    <section class="success" id="about">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 text-center">
                        <h2>About</h2>
                        <hr class="star-light">
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-4 col-lg-offset-2">
                        <p>AngryChart is a free AngularJS2 Component created by NOP.</p>
                    </div>
                    <div class="col-lg-4 col-lg-offset-2">
                        <p>The download includes the complete source files including HTML, CSS, and JavaScript as well as optional LESS stylesheets for easy customization.</p>
                    </div>                    
                </div>
            </div>
        </section>
    `
})

export class AboutSectionComponent {

}