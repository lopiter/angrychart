"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const core_1 = require("@angular/core");
const app_navigation_1 = require("./app.navigation");
const app_header_1 = require("./app.header");
const app_section_image_1 = require("./app.section.image");
const app_section_about_1 = require("./app.section.about");
const app_section_contact_1 = require("./app.section.contact");
const app_section_footer_1 = require("./app.section.footer");
const model_1 = require("./model");
let MainComponent = class MainComponent {
    constructor() {
        this.title = "Angry Chart";
        this.headTitle = "Angry Chart";
        this.headDescription = "This is AngryChart";
        this.imgSectionTitle = "Charts";
        this.menus = [
            { name: "charts", url: "#portfolio" },
            { name: "about", url: "#about" },
            { name: "contact", url: "#contact" },
            { name: "demo", url: "http://www.naver.com" }
        ];
        this.charts = [
            new model_1.ImageModel("LineChart", "img/chart/line-chart.png", "linechart", "A line chart is a way of plotting data points on a line. Often, it is used to show trend data, and the comparison of two data sets."),
            new model_1.ImageModel("BarChart", "img/chart/bar-chart.png", "barchart", "A bar chart is a way of showing data as bars.<br>It is sometimes used to show trend data, and the comparison of multiple data sets side by side."),
            new model_1.ImageModel("PieChart", "img/chart/pie-chart.png", "piechart", ""),
        ];
        this.contactFields = [
            new model_1.ContactModel("Name", model_1.ContactFieldType.TEXT, "Name", "name", false, "Please enter your name."),
            new model_1.ContactModel("Email Address", model_1.ContactFieldType.EMAIL, "Email Address", "email", true, "Please enter your email address."),
            new model_1.ContactModel("Phone Number", model_1.ContactFieldType.TEL, "Phone Number", "phone", true, "Please enter your phone number."),
            new model_1.ContactModel("Message", model_1.ContactFieldType.TEXTAREA, "Message", "message", true, "Please enter a message.")
        ];
        this.location = "11, Hwangsaeul-ro 359beon-gil<br>Bundang-gu, Seongnam-si, Gyeonggi-do";
        this.footerDescription = "AngryChart is a free to use, open source Bootstrap Freelance theme";
        this.copyright = "Copyright &copy; NOP 2016";
        this.contributor = "songeunwoo<br>lopiter<br>kyoungwonkang";
    }
    ngAfterViewChecked() {
        $(function () {
            $("body").on("input propertychange", ".floating-label-form-group", function (e) {
                $(this).toggleClass("floating-label-form-group-with-value", !!$(e.target).val());
            }).on("focus", ".floating-label-form-group", function () {
                $(this).addClass("floating-label-form-group-with-focus");
            }).on("blur", ".floating-label-form-group", function () {
                $(this).removeClass("floating-label-form-group-with-focus");
            });
        });
    }
};
MainComponent = __decorate([
    core_1.Component({
        selector: "main",
        directives: [app_navigation_1.NavigationComponent, app_header_1.HeaderComponent, app_section_image_1.ImageSectionComponent,
            app_section_about_1.AboutSectionComponent, app_section_contact_1.ContactSectionComponent, app_section_footer_1.FooterSectionComponent],
        template: `
    <navigation [title]="title" [menus]="menus"></navigation>

    <!-- Header -->
    <header [title]="title" [description]="headDescription"></header>


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
    }), 
    __metadata('design:paramtypes', [])
], MainComponent);
exports.MainComponent = MainComponent;
//# sourceMappingURL=app.main.js.map