import {Component , AfterViewChecked} from "@angular/core";
import {NavigationComponent} from "./app.navigation";
import {HeaderComponent} from "./app.header";
import {ImageSectionComponent} from "./app.section.image";
import {AboutSectionComponent} from "./app.section.about";
import {ContactSectionComponent} from "./app.section.contact";
import {FooterSectionComponent} from "./app.section.footer";
import { CommonChartService } from "./chart/common.component";
import {ContactModel , ContactFieldType , ImageModel} from "./model";


@Component({
    selector: "home",
    directives: [NavigationComponent, HeaderComponent, ImageSectionComponent , 
                 AboutSectionComponent, ContactSectionComponent , FooterSectionComponent],
    template: `

    <!-- Portfolio Grid Section -->
    <img-section [id]="charts" [charts]="charts" [title]="imgSectionTitle"></img-section>

    <!-- About Section -->
    <about-section></about-section>

    <!-- Contact Section -->
    <contact-section [fields]="contactFields"></contact-section>

    <!-- Footer -->
    <footer-section [location]="location" [description]="footerDescription" [copyright]="copyright" [contributor]="contributor"></footer-section>

    <!-- Scroll to Top Button (Only vi1sible on small and extra-small screen sizes) -->
    <div class="scroll-top page-scroll hidden-sm hidden-xs hidden-lg hidden-md">
        <a class="btn btn-primary" href="#page-top">
            <i class="fa fa-chevron-up"></i>
        </a>
    </div>     
    `
})

export class HomeComponent implements AfterViewChecked{
    private imgSectionTitle: string = "CHARTS"

    private charts = [
        new ImageModel("LineChart" , "img/chart/line-chart.png" , "linechart" , 
        "A line chart is a way of plotting data points on a line. Often, it is used to show trend data, and the comparison of two data sets."),
        new ImageModel("BarChart" , "img/chart/bar-chart.png" , "barchart" , 
        "A bar chart is a way of showing data as bars.<br>It is sometimes used to show trend data, and the comparison of multiple data sets side by side."),
        new ImageModel("PieChart" , "img/chart/pie-chart.png" , "piechart" , 
        "Pie and doughnut charts are probably the most commonly used chart there are. They are divided into segments, the arc of each segment shows the proportional value of each piece of data."),
    ];

    private contactFields = [
        new ContactModel("Name" , ContactFieldType.TEXT , "Name" , "name" , false , "Please enter your name."),
        new ContactModel("Email Address" , ContactFieldType.EMAIL , "Email Address" , "email" , true , "Please enter your email address."),
        new ContactModel("Phone Number" , ContactFieldType.TEL , "Phone Number" , "phone" , true , "Please enter your phone number."),
        new ContactModel("Message" , ContactFieldType.TEXTAREA , "Message" , "message" , true , "Please enter a message.")
    ]

    private location: string = "11, Hwangsaeul-ro 359beon-gil<br>Bundang-gu, Seongnam-si, Gyeonggi-do"
    private footerDescription: string = "AngryChart is a free to use, open source Bootstrap Freelance theme"
    private copyright: string = "Copyright &copy; NOP 2016"
    private contributor: string = "songeunwoo<br>lopiter<br>kyoungwonkang"

    ngAfterViewChecked(){


    $(function() {
        $("body").on("input propertychange", ".floating-label-form-group", function(e) {
            $(this).toggleClass("floating-label-form-group-with-value", !!$(e.target).val());
        }).on("focus", ".floating-label-form-group", function() {
            $(this).addClass("floating-label-form-group-with-focus");
        }).on("blur", ".floating-label-form-group", function() {
            $(this).removeClass("floating-label-form-group-with-focus");
        });
    });            
    }
}