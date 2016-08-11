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
let UserBlockComponent = class UserBlockComponent {
    constructor() {
        this.users = [
            { id: 1, username: "filip.lauc93@gmail.com", status: "online" },
            { id: 2, username: "laco0416@gmail.com", status: "offline" },
            { id: 3, username: "mgualtieri7@gmail.com", status: "online" },
            { id: 4, username: "ran.wahle@gmail.com", status: "online" },
            { id: 5, username: "wojtek.kwiatek@gmail.com", status: "offline" }
        ];
        this.isVisible = false;
    }
    styling(even) {
        return {
            "background": even ? "#8ff76f" : "#6fccf7",
            "color": even ? "#333" : "#fff",
            "font-style": even ? "italic" : "normal"
        };
    }
    // Improves performance of *ngFor
    trackById(index, user) {
        return user.id;
    }
};
UserBlockComponent = __decorate([
    core_1.Component({
        selector: "edge-userBlock",
        template: `
        <button (click)="isVisible = !isVisible">Open Users</button>
        <ul class="users-block" *ngIf="isVisible">
            <li *ngFor="let user of users; let e = even; trackBy:trackById">
                <span [ngClass]="{online: user.status === 'online', offline: user.status === 'offline'}"></span>
                <span>{{user.username}}</span>
                <span [ngStyle]="styling(e)"> Even: {{e}}</span>
            </li>
        </ul>`
    }), 
    __metadata('design:paramtypes', [])
], UserBlockComponent);
exports.UserBlockComponent = UserBlockComponent;
