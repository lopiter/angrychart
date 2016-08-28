import {Directive, ElementRef , Input} from "@angular/core";


@Directive({
    selector: "[makemered]",
    host: {
      "(dblclick)": "onDoubleClick()"
    }
})
export class MakemeRedDirective {
    constructor(private _el: ElementRef) {
        _el.nativeElement.style.color = this.color;
    }

    private selected: boolean = false;

    @Input("makemered") color: string;

    onDoubleClick() {
        if (!this.selected) {
            this._el.nativeElement.style.color = this.color;
            this.selected = true;
        }else {
            this._el.nativeElement.style.color = "white"
            this.selected = false;
        }
    }
}