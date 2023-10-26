export class Course{    
    private _id: number;      
    private _title: String;    
    private _createdAt: Date;   
    private _modifiedAt: Date | null; 

    constructor(title: String, id?: number){
        this._id = id || 0;
        this._title = title;
        this._createdAt =  new Date();
        this._modifiedAt = null;
    }    

    public get id(): number {
        return this._id;
    }
    public set id(value: number) {
        this._id = value;
    }

    public get title(): String {
        return this._title;
    }
    public set title(value: String) {
        this._title = value;
    }

    public get createdAt(): Date {
        return this._createdAt;
    }
    public set createdAt(value: Date) {
        this._createdAt = value;
    }

    public get modifiedAt(): Date | null{
        return this._modifiedAt;
    }
    public set modifiedAt(value: Date) {
        this._modifiedAt = value;
    }

}