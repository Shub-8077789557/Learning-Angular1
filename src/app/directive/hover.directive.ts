import { Directive , ElementRef, HostListener, Input, OnInit} from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective implements OnInit {
    @Input() color : string;
  constructor(private el : ElementRef) { 
    el.nativeElement.style.backgroundColor = 'blue';
  }

  ngOnInit(){
  this.el.nativeElement.style.backgroundColor = this.color;
  }

  @HostListener ('mouseenter')onmouseenter(){
    this.el.nativeElement.style.backgroundColor = 'blue';
  }

  @HostListener ('mouseleave')onmouseleave(){
    this.el.nativeElement.style.backgroundColor = 'red';
  }

  @HostListener ('click')onclick(){
    this.el.nativeElement.style.backgroundColor = 'green';
  }

}
