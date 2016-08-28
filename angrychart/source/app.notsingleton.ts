import {Injectable} from "@angular/core";
@Injectable()
export class NotSingletonTimeService {

    private datetime: string;

    constructor(){
        let currentdate = new Date(); 
        this.datetime = currentdate.getDate() + "/"
                + (currentdate.getMonth() + 1)  + "/" 
                + currentdate.getFullYear() + " @ "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();
    }


    getTime() {
        return this.datetime;
    }
}