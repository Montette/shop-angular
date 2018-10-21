import { Directive, HostListener, ElementRef, Input, Renderer2, HostBinding } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {

  isOpen = false;
  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  @HostListener('click') click(eventData: Event) {
    this.isOpen = !this.isOpen;
    const action = this.isOpen ? 'removeClass' : 'addClass';
    this.renderer[action](this.elRef.nativeElement, 'show');
    this.renderer[action](this.elRef.nativeElement.childNodes[1], 'show');
  }
}



