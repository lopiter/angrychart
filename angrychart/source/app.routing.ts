import { Routes, RouterModule } from '@angular/router';

import { HomeComponent }      from './app.home';
import { ChartDemoComponent }      from './app.demo';
import { SampleComponent }      from './app.sample';

const appRoutes: Routes = [
  {
    path: '1111',
    component: HomeComponent
  },
  {
    path: 'demo',
    component: ChartDemoComponent
  },
  {
    path: '',
    component: SampleComponent
  }
];

export const routing = RouterModule.forRoot(appRoutes);