import {Injectable} from "@angular/core";
@Injectable()
export class SingletonTimeService {

    private datetime: string;

    constructor(){
        let currentdate = new Date(); 
        this.datetime = currentdate.getDate() + "/"
                + (currentdate.getMonth() + 1)  + "/" 
                + currentdate.getFullYear() + " @ "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes()
    }


    getTime() {
        return this.datetime;
    }
}