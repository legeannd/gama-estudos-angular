import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'mat-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css']
})
export class CheckboxComponent {
  @Input() id: string;
  @Output() changeEvent = new EventEmitter();

  checked(event: Event) {
    const eventCheckbox = event.target as HTMLInputElement;
    this.changeEvent.emit(eventCheckbox.checked);
  }

}
