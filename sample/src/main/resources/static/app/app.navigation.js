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
let NavigationComponent = class NavigationComponent {
    ngAfterViewChecked() {
        $('.page-scroll a').bind('click', function (event) {
            let $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: ($($anchor.attr('href')).offset().top - 50)
            }, 1250, 'easeInOutExpo');
            event.preventDefault();
        });
        $('.navbar-collapse ul li a:not(.dropdown-toggle)').click(function () {
            $('.navbar-toggle:visible').click();
        });
        $('body').scrollspy({
            target: '.navbar-fixed-top',
            offset: 51
        });
        // Offset for Main Navigation
        $('#mainNav').affix({
            offset: {
                top: 100
            }
        });
    }
};
__decorate([
    core_1.Input(), 
    __metadata('design:type', String)
], NavigationComponent.prototype, "title", void 0);
__decorate([
    core_1.Input(), 
    __metadata('design:type', Array)
], NavigationComponent.prototype, "menus", void 0);
NavigationComponent = __decorate([
    core_1.Component({
        selector: "navigation",
        template: `

    <nav id="mainNav" class="navbar navbar-default navbar-fixed-top navbar-custom">
        <div class="container">
            <!-- Brand and toggle get grouped for better mobile display -->
            <div class="navbar-header page-scroll">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                    <span class="sr-only">Toggle navigation</span> Menu <i class="fa fa-bars"></i>
                </button>
                <a class="navbar-brand" href="#page-top">{{title}}</a>
            </div>

            <!-- Collect the nav links, forms, and other content for toggling -->
            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul class="nav navbar-nav navbar-right">
                    <li class="hidden">
                        <a href="#page-top"></a>
                    </li>
                    <li class="page-scroll" *ngFor="let menu of menus;" [ngSwitch]="menu.route">                        
                        <a *ngSwitchCase="false" href="{{menu.url}}" >{{menu.name}}</a>
                        <a *ngSwitchCase="true" [routerLink]="menu.url" >{{menu.name}}</a>
                    </li>
                </ul>
            </div>
            <!-- /.navbar-collapse -->
        </div>
        <!-- /.container-fluid -->
    </nav>    
    `
    }), 
    __metadata('design:paramtypes', [])
], NavigationComponent);
exports.NavigationComponent = NavigationComponent;
