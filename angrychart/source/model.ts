export class ContactModel{

    private label: string;
    private type: ContactFieldType;
    private placeHolder: string;
    private id: string;
    private required: boolean;
    private validationMessage: String;

    constructor(label: string , type: ContactFieldType , placeHolder: string,
                id: string , required: boolean ,  validationMessage: string) {
        this.label = label;
        this.type = type;
        this.placeHolder = placeHolder;
        this.id = id;
        this.required = required;
        this.validationMessage = validationMessage;
    }
}

export enum ContactFieldType{
    TEXT , TEXTAREA , EMAIL , TEL
}

export class ImageModel{
    private title: string;
    private url: string;
    private id: string;
    private description: string;    

    constructor(title: string , url: string , id: string, description: string) {
    this.title = title;
    this.url = url;
    this.id = id;
    this.id = id;
    this.description = description;
    }    
}

export class ChartModel{
    private type : ChartType;
    private id : string;
    constructor(type: ChartType , id: string){
        this.type = type
        this.id = id
    }

    getId(){
        return this.id;
    }

    getType(){
        return this.type;
    }    
}

export enum ChartType{
    BAR, LINE, PIE
}

export class ChartData{
    private labels: string[];
    private data: number[]

    constructor(labels: string[] , data: number[]){
        this.labels = labels;
        this.data = data;        
    }    

    public getLabels(){
        return this.labels;
    }

    public getData(){
        return this.data;
    }    
}

export class BarChartData extends ChartData{

}


export class LineChartData extends ChartData{

}

export class PieChartData extends ChartData{
    private colors: string[];
    private highlightColors: string[];
    constructor(labels: string[] , data: number[] , colors: string[] , highlightColors: string[]){
        super(labels , data);
        this.colors = colors;
        this.highlightColors = highlightColors;
    }

    getColors(){
        this.colors;
    }

    getHighlightColors(){
        this.colors;
    }
}