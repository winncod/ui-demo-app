import {
  Directive,
  ElementRef,
  HostListener,
  Inject,
  Input,
  OnDestroy,
  Renderer2,
} from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Directive({
  selector: '[ui-ripple]'
})
export class RippleDirective {
  
  @Input() disabled: boolean = false;
  
  constructor(
    @Inject(DOCUMENT) private document: Document,
    private element: ElementRef,
    private renderer: Renderer2
  ) {
    element.nativeElement.style.position = 'relative';
    element.nativeElement.style.overflow = 'hidden';
    element.nativeElement.style.cursor = 'pointer';
    element.nativeElement.style.display = 'block';
  }

  @HostListener('mousedown', ['$event']) handleMouseDown($event: MouseEvent): void {
    
    if (this.disabled) {
      return;
    }
    
    this.createRipple($event);
  }

  private createRipple(event: MouseEvent): void {
    let _this = this.element.nativeElement;
    Array.prototype.forEach.call(_this.getElementsByClassName('ripple'), function(childRipple:HTMLElement) {
      _this.removeChild(childRipple);
    });
    
    let circle = this.createRippleObject();
    _this.appendChild(circle);
    
    let ratio = Math.max(_this.clientWidth, _this.clientHeight);

    circle.style.width = circle.style.height = ratio + 'px';
    circle.style.left = event.clientX - _this.offsetLeft - ratio / 2 + 'px';
    circle.style.top = event.clientY - _this.offsetTop - ratio / 2 + 'px';
    circle.classList.add('ripple');
  }

  private createRippleObject():HTMLDivElement{
    let ripple = this.document.createElement('div');
    ripple.style.borderRadius = '50%';
    ripple.style.backgroundColor = '#878789';
    ripple.style.opacity = '0.4';
    ripple.style.position = 'absolute';
    ripple.style.zIndex = '9999';
    ripple.style.transform = 'scale(0)';
    //ripple.style.animation = 'ripple 0.6s linear';
    //I used animate to avoid write css ... https://developer.mozilla.org/en-US/docs/Web/API/Element/animate
    ripple.animate([
      
      { transform: 'scale(0)' },
      { transform: 'scale(2.5)' },
    ], {
      
      duration: 600,
    });

    return ripple;
  }

}
