import { User } from "../../test/model/User";
import { CommonRepositoryInterface } from "./CommonRepositoryInterface";
import { UserType } from "../../enumerated/userType";

export interface UserRepositoryInterface extends CommonRepositoryInterface<User> {
    findByEmail(email: string): User;
    findByUsername(username: string): User;
    findByUserType(userType: UserType): User[];
}