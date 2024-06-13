import { Component, input, model } from '@angular/core'

@Component({
  selector: 'test-component',
  templateUrl: './test-component.component.html',
  standalone: true,
})
export class TestComponent {
  title = input.required<string>()
  count = model<number>(1)
}