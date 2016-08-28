import { Routes, RouterModule } from '@angular/router';

import { HomeComponent }      from './app.home';
import { ChartDemoComponent }      from './app.demo';
import { SampleComponent }      from './app.sample';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'demo',
    component: ChartDemoComponent
  },
  {
    path: 'sample',
    component: SampleComponent
  }
];

export const routing = RouterModule.forRoot(appRoutes);