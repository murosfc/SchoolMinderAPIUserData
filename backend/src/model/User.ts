import { UserType } from "../enumerated/userType";
import { Course } from "./Course";

export class User{
    private _id: number;
    private _name: String;
    private _familyName: String; 
    private _email: String;
    private _createdAt: Date;   
    private _modifiedAt: Date | null;
    private _enroledAt: Course | null;
    private _userType: UserType;

    constructor(name: String, familyName: String, email: String, userType: UserType, id?: number, enroledAt?: Course | null) {
        this._id = id || 0;
        this._name = name;
        this._familyName = familyName;
        this._email = email;
        this._createdAt = new Date();
        this._modifiedAt = null;
        this._enroledAt = enroledAt || null;
        this._userType = userType;
    }

    public get id(): number {
        return this._id;
    }
    public set id(value: number) {
        this._id = value;
    }
    
    public get name(): String {
        return this._name;
    }
    public set name(value: String) {
        this._name = value;
    }

    public get familyName(): String {
        return this._familyName;
    }
    public set familyName(value: String) {
        this._familyName = value;
    }

    public get email(): String {
        return this._email;
    }
    public set email(value: String) {
        this._email = value;
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

    public get enroledAt(): Course | null {
        return this._enroledAt;
    }
    public set enroledAt(value: Course | null) {
        this._enroledAt = value;
    }

    public get userType(): UserType {
        return this._userType;
    }
    public set userType(value: UserType) {
        this._userType = value;
    }
}

