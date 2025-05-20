import { Component, ContentChildren, ElementRef, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'control',
    '(click)': 'onClick()'
  }
})
export class ControlComponent {
  @Input({required: true}) label!: string;
  @ContentChildren('input') private control ?: ElementRef<HTMLInputElement | HTMLTextAreaElement>;

  onClick() {
    console.log(this.control)
  }
}
