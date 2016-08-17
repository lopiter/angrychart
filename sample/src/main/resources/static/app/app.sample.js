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
const app_block_1 = require("./app.block");
const app_service_1 = require("./app.service");
const app_select_1 = require("./app.select");
const app_times_1 = require("./app.times");
const app_child_1 = require("./app.child");
let SampleComponent = class SampleComponent {
    constructor(_userService) {
        this._userService = _userService;
        this.hw = "Hello World is";
        this.hwClass = "test";
        this.buttonClass = "special";
        this.times = 5;
        this.childComponentName = "child";
    }
    sayHello() {
        console.log("Hi!");
    }
    printName() {
        console.log(this.name);
    }
    changeName() {
        this.name = "changed!!";
    }
    loadUser() {
        console.log(this._userService.get());
    }
    childComponentValueChange(componentValue) {
        this.childComponentValue = componentValue;
        console.log(jQuery("button").length);
    }
};
SampleComponent = __decorate([
    core_1.Component({
        selector: "sample",
        directives: [app_block_1.UserBlockComponent, app_select_1.SelectDirective, app_times_1.TimesDirective, app_child_1.ChildComponent],
        providers: [app_service_1.UserService],
        template: `
        <p>{{hw}}</p>
        <button [class]="hwClass" (click)="sayHello()">Say Hi!</button>                 
        <input type="text" [(ngModel)]="name" />
        <button [class]="hwClass" (click)="printName()">Say Name</button>
        <button [class]="hwClass" (click)="changeName()">Change Name</button>
        <button [class]="hwClass" (click)="loadUser()">loadUser</button>        
        <edge-userBlock></edge-userBlock>  
        <span [edge-select]>I have a green border!</span>     
        <div [edge-select]="'#89000e'">My border is red!</div>
        <div *edgeTimes="times">
            <span>This gets copied {{times}}</span>
        </div>                    
        <child-component [componentName]="childComponentName" (onComponentValueChange)="childComponentValueChange($event)">
         </child-component>
         <span>{{childComponentValue}}</span> 

        <alert dismissOnTimeout="3000">This alert will dismiss in 3s</alert>
        
        <button type="button" class='btn btn-primary' (click)="addAlert()">Add Alert</button>           
    `
    }), 
    __metadata('design:paramtypes', [app_service_1.UserService])
], SampleComponent);
exports.SampleComponent = SampleComponent;
