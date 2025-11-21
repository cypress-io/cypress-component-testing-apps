import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
})
export class ButtonComponent {
  @Output() onClick = new EventEmitter()
}
