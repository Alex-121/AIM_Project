import { ValueConverter } from '@angular/compiler/src/render3/view/template';

export class Descriptions {
   private _title: string;
   private _topics: string;
   private _description: string;
   private _rating: string;
   private _date: string;

    constructor() {

        this._date = new Date().toLocaleDateString('en-US');
    }

    public get title(): string {
        return this._title;
    }
    public set title(value: string) {
        this._title = value;
    }
    public get topic(): string {
        return this._topics;
    }
    public set topic(value: string) {
        this._topics = value;
    }
    public get description(): string {
        return this._description;
    }
    public set description(value: string) {
        this._description = value;
    }
    public get rating(): string {
        return this._rating;
    }
    public set rating(value: string) {
        this._rating = value;
    }
    public get date(): string {
        return this._date;
    }
    public set date(value: string) {
        this._date = value;
    }
}
