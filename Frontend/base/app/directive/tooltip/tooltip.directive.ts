import { AfterViewInit, Directive, ElementRef, EventEmitter, Output } from '@angular/core';

@Directive({
  selector: '[tooltipActive]'
})
export class tooltipDirective implements AfterViewInit {
 
  constructor(private elementRef: ElementRef) {
    
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      const element = this.elementRef.nativeElement;
      if(element.offsetWidth < element.scrollWidth){
        element.title = element.innerText;
      }
    },5000);
  }
}
