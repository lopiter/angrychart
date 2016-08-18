import { bootstrap }    from "@angular/platform-browser-dynamic";
import { MainComponent } from "./app.main";
import { CommonChartService } from "./chart/common.component";
bootstrap(MainComponent, [CommonChartService]);
