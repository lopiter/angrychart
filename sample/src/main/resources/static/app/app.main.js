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
let MainComponent = class MainComponent {
    constructor() {
        this.title = "Angry Chart";
        this.headTitle = "Angry Chart";
        this.headDescription = "This is AngryChart";
        this.imgSectionTitle = "Charts";
        this.menus = [
            { name: "charts", url: "#portfolio", route: false },
            { name: "about", url: "#about", route: false },
            { name: "contact", url: "#contact", route: false },
            { name: "demo", url: "/demo", route: true }
        ];
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

    <router-outlet></router-outlet>

    `
    }), 
    __metadata('design:paramtypes', [])
], MainComponent);
exports.MainComponent = MainComponent;
