import { Routes } from '@angular/router';
import { MainPagesComponent } from './main-pages/main-pages.component';
import { PrivarcyPolicyComponent } from './main-pages/privarcy-policy/privarcy-policy.component';
import { DataPrivarcyComponent } from './main-pages/data-privarcy/data-privarcy.component';

export const routes: Routes = [
  { path: '', component: MainPagesComponent },
  {
    path: 'privarcy-policy',
    component: PrivarcyPolicyComponent,
    data: { title: 'Privacy Policy' },
  },
  {
    path: 'data-privarcy',
    component: DataPrivarcyComponent,
    data: { title: 'Data Privacy' },
  },
  { path: '**', redirectTo: '' }, // Redirect any unknown routes to home
];
