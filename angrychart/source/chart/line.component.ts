
import {LineChartData} from "../model.ts"

export class LineChartService {

    private getDefaultLineData(){
        let lineData: LinearChartData = {
            labels: [],
            datasets: [
                {
                    label: "My First dataset",
                    fillColor: "rgba(220,220,220,0.5)",
                    strokeColor: "rgba(220,220,220,0.8)",
                    highlightFill: "rgba(220,220,220,0.75)",
                    highlightStroke: "rgba(220,220,220,1)",
                    data: []
                },
            ]
        };
        return lineData;
    }


    private lineOpts: LineChartOptions = {  
        scaleShowGridLines: true,
        scaleGridLineColor: "rgba(0,0,0,.05)",
        scaleGridLineWidth: 1,
        bezierCurve: true,
        bezierCurveTension: 0.4,
        pointDot: true,
        pointDotRadius: 4,
        pointDotStrokeWidth: 1,
        pointHitDetectionRadius: 20,
        datasetStroke: true,
        datasetStrokeWidth: 2,
        datasetFill: true,
        legendTemplate: "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].lineColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>",
    };

    getLineData(data: LineChartData) {
    let _data: LinearChartData = this.getDefaultLineData();
    _data.labels = data.getLabels();
    _data.datasets[0].data = data.getData();
    return _data;
    }
    getLineOpts() {
        return this.lineOpts;
    }
   
}
