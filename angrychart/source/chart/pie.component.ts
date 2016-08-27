
import {PieChartData} from "../model.ts"

export class PieChartService {
    private pieData: CircularChartData[] = [
        {
            value: 300,
            color: "#F7464A",
            highlight: "#FF5A5E",
            label: "Red"
        },
        {
            value: 50,
            color: "#46BFBD",
            highlight: "#5AD3D1",
            label: "Green"
        },
        {
            value: 100,
            color: "#FDB45C",
            highlight: "#FFC870",
            label: "Yellow"
        }
    ];

    private pieOpts: PieChartOptions = {
        segmentShowStroke: true,
        segmentStrokeColor: "#fff",
        segmentStrokeWidth: 2,
        percentageInnerCutout: 0,
        animationSteps: 100,
        animationEasing: "easeOutBounce",
        animateRotate: true,
        animateScale: false,
        legendTemplate: "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<segments.length; i++){%><li><span style=\"background-color:<%=segments[i].fillColor%>\"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>"
    }
    getPieData(data: PieChartData) {
        let pieData: CircularChartData[]
        for (let i = 0 ; i < data.getData.length ; i++){
            pieData.push(
                {
                    value: data.getData[i],
                    color: data.getColors[i],
                    highlight: data.getHighlightColors[i],
                    label: data.getLabels[i]
                }
            )
        }
        return this.pieData;
    }
    
    getPieOpts() {
        return this.pieOpts;
    }

}
