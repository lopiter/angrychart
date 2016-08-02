import {Component} from "@angular/core";
import {UserBlockComponent} from "./app.block";
import {UserService} from "./app.service";

@Component({
    selector: "sample",
    directives: [UserBlockComponent],
    providers: [UserService],
    template: `
        <p>{{hw}}</p>
        <button [class]="hwClass" (click)="sayHello()">Say Hi!</button>                 
        <input type="text" [(ngModel)]="name" />
        <button [class]="hwClass" (click)="printName()">Say Name</button>
        <button [class]="hwClass" (click)="changeName()">Change Name</button>
        <button [class]="hwClass" (click)="loadUser()">loadUser</button>        
        <edge-userBlock></edge-userBlock>                        
    `
})
export class SampleComponent {
    constructor(private _userService: UserService) {}

    public hw = "Hello World!";
    public buttonClass = "special";
    public name: string;

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
}