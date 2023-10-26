import { UserType } from "../../enumerated/userType";
import { Class } from "../../model/Class";
import { Course } from "../../model/Course";
import { User } from "../../model/User";

describe('Class', () => {
    it('should create a new class', () => {
        const sut = new Class('Cordeirinhos de Jesus', 5, 10);
        expect(sut).toBeInstanceOf(Class);
        expect(sut.id).toBe(0);
    });

    it('All getters and setters should work', () => {
        const sut = new Class('Class 1', 5, 10);
        sut.id = 1;
        sut.title = 'Class 2';
        sut.teachers = [new User('John', 'Doe', 'jd@gmail.com', UserType.TEACHER)];
        sut.createdAt = new Date();
        sut.modifiedAt = new Date();
        sut.students = [new User('Jane', 'Doe', 'janed@gmail.com', UserType.STUDENT)];
        sut.currentCourse = new Course('Desafios da atualidade');
        sut.minAge = 4;
        sut.maxAge = 9;
        expect(sut.id).toBe(1);
        expect(sut.title).toBe('Class 2');
        expect(sut.teachers).toBeInstanceOf(Array);
        expect(sut.createdAt).toBeInstanceOf(Date);
        expect(sut.modifiedAt).toBeInstanceOf(Date);
        expect(sut.students).toBeInstanceOf(Array);
        expect(sut.currentCourse).toBeInstanceOf(Course);
        expect(sut.minAge).toBe(4);
        expect(sut.maxAge).toBe(9);
    });

    it('should add a student', () => {
        const sut = new Class('Class 1', 5, 10);
        const student = new User('Jane', 'Doe', 'jd@gmail.com', UserType.STUDENT);
        sut.addStudent(student);
        expect(sut.students).toContain(student);
    });

    it('should remove a student', () => {
        const sut = new Class('Class 1', 5, 10);
        const student = new User('Jane', 'Doe', 'jd@gmail.com', UserType.STUDENT);
        sut.addStudent(student);
        expect(sut.students).toContain(student);
        sut.removeStudent(student);
        expect(sut.students).not.toContain(student);
    })

});