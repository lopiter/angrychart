import {Directive, ElementRef , Input} from "@angular/core";



@Directive({
    selector: "[edge-select]",
    host: {
      "(dblclick)": "onDoubleClick()"
    }
})
export class SelectDirective {
    constructor(private _el: ElementRef) {
        _el.nativeElement.style.border = "2px solid #00897b";
    }

    private selected: boolean = false;

    @Input("edge-select") borderColor: string = "#00897b";

    onDoubleClick() {
        if (!this.selected) {
            this._el.nativeElement.style.border = "2px solid" + this.borderColor;
            this.selected = true;
        }

        else {
            this._el.nativeElement.style.border = "none";
            this.selected = false;
        }
    }
}