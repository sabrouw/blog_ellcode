import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appButton]'
})
export class ButtonDirective {

  constructor(private el: ElementRef) {
    this.setColor('#654A75')
    this.setColor('white')
   }

  setColor(color: string){
    this.el.nativeElement.style.backgroundColor  = '#654A75';
    this.el.nativeElement.style.color ='white'
  }


}
