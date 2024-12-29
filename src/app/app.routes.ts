import { Routes } from '@angular/router';

import { HomeComponent } from './features/home/home.component';
import { LibraryComponent } from './features/library/library.component';
import { LoginComponent } from './features/login/login.component';
import { PlayerComponent } from './features/player/player.component';
import { RegisterComponent } from './features/register/register.component';
import { SearchComponent } from './features/search/search.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'library', component: LibraryComponent },
  { path: 'login', component: LoginComponent },
  { path: 'player/:id', component: PlayerComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'search', component: SearchComponent },
];
