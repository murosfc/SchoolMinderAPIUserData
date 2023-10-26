import { Course } from "./Course";
import { User } from "./User";

export class Class{
    private _id: number;    
    private _title: String;   
    private _teachers: User[] | undefined; 
    private _createdAt: Date;  
    private _modifiedAt: Date | null;   
    private _students: User[] | undefined;   
    private _currentCourse?: Course | null | undefined;
    private _minAge: number;
    private _maxAge: number; 
    
    constructor(title: String, minAge: number, maxAge: number, id?: number, teachers?: User[], students?: User[], currentCourse?: Course | null){
        this._id = id || 0;
        this._title = title;
        this._teachers = teachers || undefined;
        this._createdAt =  new Date();
        this._modifiedAt = null;
        this._students = students || undefined;
        this._currentCourse = currentCourse || null;
        this._minAge = minAge;
        this._maxAge = maxAge;
    }

    addTeacher(teacher: User){
        this._teachers = this._teachers || [];
        this._teachers.push(teacher);
    }
 
    addStudent(student: User){
        this._students = this._students || [];
        this._students.push(student);
    }

    removeStudent(student: User){
        if(this._students === undefined){
            return;
        }
        this._students = this._students.filter((s) => s.id !== student.id);
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

    public get teachers(): User[] | undefined{
        return this._teachers;
    }
    public set teachers(value: User[]) {
        this._teachers = value;
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

    public get students(): User[] | undefined{
        return this._students;
    }
    public set students(value: User[]) {
        this._students = value;
    }

    public get currentCourse(): Course | null | undefined {
        return this._currentCourse;
    }
    public set currentCourse(value: Course | null | undefined) {
        this._currentCourse = value;
    }

    public get minAge(): number {
        return this._minAge;
    }
    public set minAge(value: number) {
        this._minAge = value;
    }

    public get maxAge(): number {
        return this._maxAge;
    }
    public set maxAge(value: number) {
        this._maxAge = value;
    }  
}