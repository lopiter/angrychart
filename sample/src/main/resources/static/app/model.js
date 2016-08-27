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
class ChartModel {
    constructor(type, id) {
        this.type = type;
        this.id = id;
    }
    getId() {
        return this.id;
    }
    getType() {
        return this.type;
    }
}
exports.ChartModel = ChartModel;
(function (ChartType) {
    ChartType[ChartType["BAR"] = 0] = "BAR";
    ChartType[ChartType["LINE"] = 1] = "LINE";
    ChartType[ChartType["PIE"] = 2] = "PIE";
})(exports.ChartType || (exports.ChartType = {}));
var ChartType = exports.ChartType;
class ChartData {
    constructor(labels, data) {
        this.labels = labels;
        this.data = data;
    }
    getLabels() {
        return this.labels;
    }
    getData() {
        return this.data;
    }
}
exports.ChartData = ChartData;
class BarChartData extends ChartData {
}
exports.BarChartData = BarChartData;
class LineChartData extends ChartData {
}
exports.LineChartData = LineChartData;
class PieChartData extends ChartData {
    constructor(labels, data, colors, highlightColors) {
        super(labels, data);
        this.colors = colors;
        this.highlightColors = highlightColors;
    }
    getColors() {
        this.colors;
    }
    getHighlightColors() {
        this.colors;
    }
}
exports.PieChartData = PieChartData;
