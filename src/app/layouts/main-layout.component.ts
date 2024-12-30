import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { NavigationComponent } from '../shared/components/navigation.component';

@Component({
  imports: [RouterOutlet, NavigationComponent],
  template: `
    <router-outlet />
    <app-navigation />
  `,
})
export class MainLayoutComponent { }
