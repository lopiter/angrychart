"use strict";
const router_1 = require('@angular/router');
const app_home_1 = require('./app.home');
const app_demo_1 = require('./app.demo');
const appRoutes = [
    {
        path: '',
        component: app_home_1.HomeComponent
    },
    {
        path: 'demo',
        component: app_demo_1.ChartDemoComponent
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
