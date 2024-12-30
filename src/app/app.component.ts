import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  template: `
    <main class="w-full min-h-screen bg-primary">
      <router-outlet />
    </main>
  `,
})
export class AppComponent { }
