import { 
    Directive, 
    OnInit, 
    SimpleChanges ,
    ElementRef
} from "@angular/core";

@Directive({
    selector: '[kcQuotation]'
})
export class QuotationDirective {
    constructor (el: ElementRef) { 
        console.log('whattup?', el);
    }
}