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