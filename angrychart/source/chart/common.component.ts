import {Injectable, Inject} from "@angular/core";
import {BarChartService} from "./bar.component";
import {LineChartService} from "./line.component";
import {RadarChartService} from "./radar.component";
import {PieChartService} from "./pie.component";
import {PolarAreaChartService} from "./polarArea.component";

@Injectable()
export class CommonChartService {
  private _BarChartService: BarChartService;
  private _lineChartService: LineChartService;
  private _radarChartService: RadarChartService;
  private _pieChartService: PieChartService;
  private _polarAreaChartService: PolarAreaChartService;

  constructor() {
    this._BarChartService = new BarChartService();
    this._lineChartService = new LineChartService();
    this._radarChartService = new RadarChartService();
    this._pieChartService = new PieChartService();
    this._polarAreaChartService = new PolarAreaChartService();
  }
  
  get BarChartService(): BarChartService {
    return this._BarChartService;
  }

  set BarChartService(value: BarChartService) {
    this._BarChartService = value;
  }

  get lineChartService(): LineChartService {
    return this._lineChartService;
  }

  set lineChartService(value: LineChartService) {
    this._lineChartService = value;
  }

  get radarChartService(): RadarChartService {
    return this._radarChartService;
  }

  set radarChartService(value: RadarChartService) {
    this._radarChartService = value;
  }

  get pieChartService(): PieChartService {
    return this._pieChartService;
  }

  set pieChartService(value: PieChartService) {
    this._pieChartService = value;
  }

  get polarAreaChartService(): PolarAreaChartService {
    return this._polarAreaChartService;
  }

  set polarAreaChartService(value: PolarAreaChartService) {
    this._polarAreaChartService = value;
  }
}