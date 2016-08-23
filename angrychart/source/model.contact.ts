export class ContactModel{

    private label: string;
    private type: ContactFieldType;
    private placeHolder: string;
    private id: string;
    private required: boolean;
    private validationMessage: String;

    constructor(label: string , type: ContactFieldType , placeHolder: string,
                id: string ,required: boolean ,  validationMessage: string) {
        this.label = label;
        this.type = type;
        this.placeHolder = placeHolder;
        this.id = id;
        this.required = required;
        this.validationMessage = validationMessage;
    }
}

export enum ContactFieldType{
    TEXT , TEXTAREA
}