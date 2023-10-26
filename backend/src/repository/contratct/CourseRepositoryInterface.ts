import { Course } from "../../test/model/Course";
import { CommonRepositoryInterface } from "./CommonRepositoryInterface";

export interface CourseRepositoryInterface extends CommonRepositoryInterface<Course> {
    findByTitle(title: string): Course;
}