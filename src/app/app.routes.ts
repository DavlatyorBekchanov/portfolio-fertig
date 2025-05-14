import { Routes } from '@angular/router';
import { MainPagesComponent } from './main-pages/main-pages.component';
import { PrivarcyPolicyComponent } from './privarcy-policy/privarcy-policy.component';
export const routes: Routes = [
  { path: '', component: MainPagesComponent },
  { path: 'privarcy-policy', component: PrivarcyPolicyComponent },
];
