import {Directive, ElementRef , Input} from "@angular/core";


@Directive({
    selector: "[makemeblue]",
    host: {
      "(dblclick)": "onDoubleClick()"
    }
})
export class MakemeBlueDirective {
    constructor(private _el: ElementRef) {
        _el.nativeElement.style.color = this.color;
    }

    private selected: boolean = false;

    @Input("makemeblue") color: string;

    onDoubleClick() {
        if (!this.selected) {
            this._el.nativeElement.style.color = this.color;
            this.selected = true;
        }else {
            this._el.nativeElement.style.color = "black"
            this.selected = false;
        }
    }
}