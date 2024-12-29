import { NgClass } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

interface ISection {
  route: string
  icon: string
}

@Component({
  selector: 'app-navigation',
  imports: [RouterLink, NgClass],
  templateUrl: 'navigation.component.html',
  providers: [Router],
})
export class NavigationComponent {
  public readonly sections: ISection[] = [
    { route: '/home', icon: 'house-door' },
    { route: '/search', icon: 'search-heart' },
    { route: '/library', icon: 'collection' },
    { route: '/login', icon: 'box-arrow-right' },
  ];
  public readonly activeLink = 'background';
  private readonly router: Router = inject(Router);

  public isActive({ route, icon }: ISection): string {
    const isActive = this.router.isActive(route, {
      paths: 'exact',
      queryParams: 'ignored',
      matrixParams: 'ignored',
      fragment: 'ignored'
    });
    return isActive ? `bi-${icon}-fill` : `bi-${icon}`;
  }
}
