import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  template: `<button
               [type]="type"
               [disabled]="disabled"
               class="button">
               <ng-content></ng-content>
             </button>`,
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  @Input() type: 'button'|'submit' = 'button';
  @Input() disabled = false;
}
