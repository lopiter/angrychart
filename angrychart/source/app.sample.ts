import {Component} from "@angular/core";
import {UserBlockComponent} from "./app.block";
import {UserService} from "./app.service";
import {SelectDirective} from "./app.select";
import {TimesDirective} from "./app.times";
import {ChildComponent} from "./app.child";


@Component({
    selector: "sample",
    directives: [UserBlockComponent , SelectDirective , TimesDirective , ChildComponent],
    providers: [UserService],
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
    `
})

export class SampleComponent {
    constructor(private _userService: UserService) {
        this.childComponentName = "child";
    }

    public hw = "Hello World is";
    public hwClass = "test";
    public buttonClass = "special";
    public name: string;
    public times: number = 5;
    public childComponentName: string;
    public childComponentValue: string;

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
}