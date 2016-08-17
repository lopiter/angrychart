import { bootstrap }    from "@angular/platform-browser-dynamic";
import { AppComponent } from "./app.component";
import { SampleComponent } from "./app.sample";
import { ChartComponent } from "./app.chart";
import { CommonChartService } from "./chart/common.component";
bootstrap(SampleComponent);
bootstrap(ChartComponent, [CommonChartService]);
