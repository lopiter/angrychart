import {Component} from "@angular/core";

@Component({
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
})
export class UserBlockComponent {
    public users = [
        {id: 1, username: "filip.lauc93@gmail.com", status: "online"},
        {id: 2, username: "laco0416@gmail.com", status: "offline"},
        {id: 3, username: "mgualtieri7@gmail.com", status: "online"},
        {id: 4, username: "ran.wahle@gmail.com", status: "online"},
        {id: 5, username: "wojtek.kwiatek@gmail.com", status: "offline"}
    ];

    public isVisible: boolean = false;

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
}