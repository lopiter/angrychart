import {Component, Input , Output , EventEmitter} from "@angular/core";

@Component({selector: "child-component",
 template: `<h2>{{componentName}}</h2>
            <input type="text" [(ngModel)]="comopnentValue"/>
            <input type="button" (click)="componentValueChanged()"/>
 `
 })
 export class ChildComponent {
 @Input() componentName: string;
 @Output() onComponentValueChange: EventEmitter<any> = new EventEmitter<any>();

 public comopnentValue: string;

 componentValueChanged() {
     console.log(this.onComponentValueChange);
     this.onComponentValueChange.emit(this.comopnentValue);
 }
 }