import { Class } from "../../test/model/Class";
import { CommonRepositoryInterface } from "./CommonRepositoryInterface";

export interface ClassRepositoryInterface extends CommonRepositoryInterface<Class> {
    findByTitle(title: string): Class;
    findByStudent(studentId: number): Class;
    findByCourse(courseId: number): Class;
    findByTeacher(teacherId: number): Class;
}