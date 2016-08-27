"use strict";
class BarChartService {
    constructor() {
        this.barChartOption = {
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
    }
    getDefaultBarChartData() {
        let barData = {
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
    getBarData(data) {
        let _data = this.getDefaultBarChartData();
        _data.labels = data.getLabels();
        _data.datasets[0].data = data.getData();
        return _data;
    }
    getBarOpts() {
        return this.barChartOption;
    }
}
exports.BarChartService = BarChartService;
