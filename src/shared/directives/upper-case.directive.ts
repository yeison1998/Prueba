import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appUpperCase]'
})
export class UpperCaseDirective {

  constructor(private el: ElementRef) { }

  @HostListener('input', ['$event']) onInput(event: any) {
    let valor = this.el.nativeElement.value;
    valor = this.upperCase(valor);

    this.el.nativeElement.value = valor;
  }

  upperCase(value: string): string {
    return value.toUpperCase();
  }

}
