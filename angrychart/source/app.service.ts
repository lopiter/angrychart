import {Injectable} from "@angular/core";
@Injectable()
export class UserService {

    private users = [
        {id: 1, username: "filip.lauc93@gmail.com", status: "online"},
        {id: 2, username: "laco0416@gmail.com", status: "offline"},
        {id: 3, username: "mgualtieri7@gmail.com", status: "online"},
        {id: 4, username: "ran.wahle@gmail.com", status: "online"},
        {id: 5, username: "wojtek.kwiatek@gmail.com", status: "offline"}
    ];
    get() {
        return this.users;
    }
}