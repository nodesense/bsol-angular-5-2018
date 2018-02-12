import { Directive,
         OnInit,
         OnDestroy,

         Input,
         HostListener,
         ElementRef,

         Renderer
        } from '@angular/core';

// no template
// to be used an attribute
// animation/reusable styling/interaction

@Directive({
  selector: '[appHighlight]',
  exportAs: 'appHighlight'
})
export class HighlightDirective implements OnInit, OnDestroy {

  @Input()
  color:string;

  // dependency injection
  constructor(private hostElement: ElementRef, 
             private renderer: Renderer) {
    console.log("highliht directive created");
  }

  ngOnInit() {
    console.log("highlight oninit");
    console.log("highlight color ", this.color);
  }

  ngOnDestroy() {
    console.log("highlight onDestroy");
  }

  setColor(color: string) {
    this.renderer
      .setElementStyle(this.hostElement.nativeElement,
                      'background',
                      color);
  }


  @HostListener('mouseenter')
  onEnter() {
    console.log("mouse enter");
    this.setColor(this.color);
  }

  @HostListener('mouseleave')
  onLeave() {
    console.log('mouse leave');
    this.setColor('');
  }


  @HostListener('click')
  onClick() {
    console.log('click');
  }

  setNewColor(color: string) {
    // alert("New color " + color);
    this.setColor(color);
  }

}
