import { makeAutoObservable } from 'mobx';

export default class MainStore {
    constructor() {
        this._parent = 1;
        this._title = '';
        this._unit = "0";
        this._quantity = 0;
        this._unitPrice = 0;
        this._price = 0;
        this._type = 'level'
        this._id = 1
        makeAutoObservable(this);
    }
    setParent(parent) {
        this._parent = parent;
    }
    setTitle(title) {
        this._title = title;
    }
    setUnit(unit) {
        this._unit = unit;
    }
    setQuantity(quantity) {
        this._quantity = quantity;
    }
    setUnitPrice(unitPrice) {
        this._unitPrice = unitPrice;
    }
    setPrice(price) {
        this._price = price;
    }
    get parent() {
        return this._parent;
    }
    get title() {
        return this._title;
    }
    get unit() {
        return this._unit;
    }
    get quantity() {
        return this._quantity;
    }
    get selectedBrand() {
        return this._selectedBrand;
    }
    get price() {
        return this._price;
    }
    get unitPrice() {
        return this._unitPrice;
    }
    get id() {
        return this._id;
    }
}
