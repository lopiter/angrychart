import {BarChartData} from "../model.ts"

export class BarChartService {


  private getDefaultBarChartData(){
    let barData: LinearChartData = {
    labels: [],
    datasets: [
      {
        label: "My Second dataset",
        fillColor: "rgba(151,187,205,0.5)",
        strokeColor: "rgba(151,187,205,0.8)",
        highlightFill: "rgba(151,187,205,0.75)",
        highlightStroke: "rgba(151,187,205,1)",
        data: []
      }
    ]
  };
  return barData;
  }


  private barChartOption: BarChartOptions = {
    scaleBeginAtZero: true,
    scaleShowGridLines: true,
    scaleGridLineColor: "rgba(0,0,0,.05)",
    scaleGridLineWidth: 1,
    barShowStroke: true,
    barStrokeWidth: 2,
    barValueSpacing: 5,
    barDatasetSpacing: 1,
    legendTemplate: "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].lineColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>"
  };

  getBarData(data: BarChartData) {
    let _data: LinearChartData = this.getDefaultBarChartData();
    _data.labels = data.getLabels();
    _data.datasets[0].data = data.getData();
    return _data;
  }
  getBarOpts() {
    return this.barChartOption;
  }

}
