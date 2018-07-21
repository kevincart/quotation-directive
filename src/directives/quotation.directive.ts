import { Directive, ElementRef, OnInit, SimpleChanges } from "@angular/core";

@Directive({
    selector: '[kc-quotation]'
})
export class quotation implements OnInit {
    constructor (el: ElementRef) { 
        console.log('inside directive bro');
    }

    public ngOnInit (): void {
        return null;
    }
}