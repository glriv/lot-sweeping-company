import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home';
import { AboutComponent } from './components/about/about';
import { I9DownloadComponent } from './components/i9-download/i9-download';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'i9-employment', component: I9DownloadComponent },
  { path: '**', redirectTo: '' },
];
