import { Routes } from '@angular/router';

import { HomeComponent } from './features/home/home.component';
import { LibraryComponent } from './features/library/library.component';
import { LoginComponent } from './features/login/login.component';
import { NotFoundComponent } from './features/not-found/not-found.component';
import { PlayerComponent } from './features/player/player.component';
import { PreviewComponent } from './features/preview/preview.component';
import { RegisterComponent } from './features/register/register.component';
import { SearchComponent } from './features/search/search.component';
import { MainLayoutComponent } from './layouts/main-layout.component';

export const routes: Routes = [
  { path: '', component: PreviewComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'library', component: LibraryComponent },
      { path: 'player/:id', component: PlayerComponent },
      { path: 'search', component: SearchComponent },
    ]
  },
  { path: '**', component: NotFoundComponent },
];
