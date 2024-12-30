import { Component, input, InputSignal } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-back',
  imports: [RouterLink],
  template: `
    <a class="fixed top-0 left-2" [routerLink]="route()">
      <i class="bi bi-arrow-left-short font-extrabold text-7xl"></i>
    </a>
  `,
})
export class BackComponent {
  public readonly route: InputSignal<string> = input.required();
}
