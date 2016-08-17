"use strict";
const platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
const app_sample_1 = require("./app.sample");
const app_chart_1 = require("./app.chart");
const common_component_1 = require("./chart/common.component");
platform_browser_dynamic_1.bootstrap(app_sample_1.SampleComponent);
platform_browser_dynamic_1.bootstrap(app_chart_1.ChartComponent, [common_component_1.CommonChartService]);
