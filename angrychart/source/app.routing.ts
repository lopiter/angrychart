import { Routes, RouterModule } from '@angular/router';

import { HomeComponent }      from './app.home';
import { ChartDemoComponent }      from './app.demo';

const appRoutes: Routes = [
  {
    path: 'dfsf',
    component: HomeComponent
  },
  {
    path: '',
    component: ChartDemoComponent
  }
];

export const routing = RouterModule.forRoot(appRoutes);