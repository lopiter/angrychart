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
let MakemeRedDirective = class MakemeRedDirective {
    constructor(_el) {
        this._el = _el;
        this.selected = false;
        _el.nativeElement.style.color = this.color;
    }
    onDoubleClick() {
        if (!this.selected) {
            this._el.nativeElement.style.color = this.color;
            this.selected = true;
        }
        else {
            this._el.nativeElement.style.color = "white";
            this.selected = false;
        }
    }
};
__decorate([
    core_1.Input("makemered"), 
    __metadata('design:type', String)
], MakemeRedDirective.prototype, "color", void 0);
MakemeRedDirective = __decorate([
    core_1.Directive({
        selector: "[makemeblue]",
        host: {
            "(dblclick)": "onDoubleClick()"
        }
    }), 
    __metadata('design:paramtypes', [core_1.ElementRef])
], MakemeRedDirective);
exports.MakemeRedDirective = MakemeRedDirective;
