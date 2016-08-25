import {Component , Input} from "@angular/core";

@Component({
    selector: "footer-section",
    template: `
<footer class="text-center">
        <div class="footer-above">
            <div class="container">
                <div class="row">
                    <div class="footer-col col-md-4">
                        <h3>Location</h3>
                        <p [innerHTML]="location"></p>
                    </div>                    
                    <div class="footer-col col-md-4">
                        <h3>LICENSE</h3>
                        <p>{{description}}}</p>
                    </div>
                    <div class="footer-col col-md-4">
                        <h3>CONTRIBUTOR</h3>
                        <p  [innerHTML]="contributor"></p>
                    </div>                    
                </div>
            </div>
        </div>
        <div class="footer-below">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        {{copyright}}
                    </div>
                </div>
            </div>
        </div>
    </footer>
    `
})

export class FooterSectionComponent {
    @Input() location: string;
    @Input() description: string;
    @Input() copyright: string;
    @Input() contributor: string;
}