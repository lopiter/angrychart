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
let SelectDirective = class SelectDirective {
    constructor(_el) {
        this._el = _el;
        this.selected = false;
        this.borderColor = "#00897b";
        _el.nativeElement.style.border = "2px solid #00897b";
    }
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
};
__decorate([
    core_1.Input("edge-select"), 
    __metadata('design:type', String)
], SelectDirective.prototype, "borderColor", void 0);
SelectDirective = __decorate([
    core_1.Directive({
        selector: "[edge-select]",
        host: {
            "(dblclick)": "onDoubleClick()"
        }
    }), 
    __metadata('design:paramtypes', [core_1.ElementRef])
], SelectDirective);
exports.SelectDirective = SelectDirective;
//# sourceMappingURL=app.select.js.map