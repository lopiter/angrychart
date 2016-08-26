"use strict";
class ContactModel {
    constructor(label, type, placeHolder, id, required, validationMessage) {
        this.label = label;
        this.type = type;
        this.placeHolder = placeHolder;
        this.id = id;
        this.required = required;
        this.validationMessage = validationMessage;
    }
}
exports.ContactModel = ContactModel;
(function (ContactFieldType) {
    ContactFieldType[ContactFieldType["TEXT"] = 0] = "TEXT";
    ContactFieldType[ContactFieldType["TEXTAREA"] = 1] = "TEXTAREA";
    ContactFieldType[ContactFieldType["EMAIL"] = 2] = "EMAIL";
    ContactFieldType[ContactFieldType["TEL"] = 3] = "TEL";
})(exports.ContactFieldType || (exports.ContactFieldType = {}));
var ContactFieldType = exports.ContactFieldType;
class ImageModel {
    constructor(title, url, id, description) {
        this.title = title;
        this.url = url;
        this.id = id;
        this.id = id;
        this.description = description;
    }
}
exports.ImageModel = ImageModel;
