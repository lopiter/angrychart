import {Component , AfterViewChecked} from "@angular/core";
import {NavigationComponent} from "./app.navigation";
import {HomeComponent} from "./app.home";
import {HeaderComponent} from "./app.header";
import {ImageSectionComponent} from "./app.section.image";
import {AboutSectionComponent} from "./app.section.about";
import {ContactSectionComponent} from "./app.section.contact";
import {FooterSectionComponent} from "./app.section.footer";
import {ContactModel , ContactFieldType , ImageModel} from "./model";



@Component({
    selector: "main",
    directives: [NavigationComponent, HeaderComponent, ImageSectionComponent , 
                 AboutSectionComponent, ContactSectionComponent , FooterSectionComponent],
    template: `
    <navigation [title]="title" [menus]="menus"></navigation>

    <!-- Header -->
    <header [title]="title" [description]="headDescription"></header>

    <router-outlet></router-outlet>

    `
})

export class MainComponent implements AfterViewChecked{
    private title: string = "Angry Chart"
    private headTitle: string = "Angry Chart"
    private headDescription: string = "This is AngryChart"
    private imgSectionTitle: string = "Charts"
    private menus = [
        {name : "charts" , url: "#portfolio" , route: false},
        {name : "about" ,  url: "#about" , route: false},
        {name : "contact" , url: "#contact" , route: false},
        {name : "demo" , url: "/demo" , route: true}
    ];
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