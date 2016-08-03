import {Directive, Input, TemplateRef, ViewContainerRef} from "@angular/core";

@Directive({ selector: "[edgeTimes]" })
export class TimesDirective {
    constructor(
        private _viewContainer: ViewContainerRef,
        private _templateRef: TemplateRef<Object>
    ) {}

    @Input() set edgeTimes(times: number) {
        this._viewContainer.clear();
        for (let i = 0; i < times; i++) this._viewContainer.createEmbeddedView(this._templateRef);
    }
}