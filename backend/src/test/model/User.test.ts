import {User} from '../../model/User';
import {UserType} from '../../enumerated/userType';

describe('User', () => {
    it('should create a new user', () => {
        const sut = new User('John', 'Doe', 'jhondoe@gmail.com', UserType.STUDENT);
        expect(sut).toBeInstanceOf(User);
        expect(sut.id).toBe(0);
    });

    it('All getters and setters should work', () => {
        const sut = new User('John', 'Doe', 'jhondoe@gmail.com', UserType.STUDENT);
        sut.id = 1;
        sut.name = 'Jane';
        sut.familyName = 'Doe';
        sut.email = 'jd@gmail.com';
        sut.createdAt = new Date();
        sut.modifiedAt = new Date();
        sut.enroledAt = null;
        sut.userType = UserType.STUDENT;
        expect(sut.id).toBe(1);
        expect(sut.name).toBe('Jane');
        expect(sut.familyName).toBe('Doe');
        expect(sut.email).toBe('jd@gmail.com');
        expect(sut.createdAt).toBeInstanceOf(Date);
        expect(sut.modifiedAt).toBeInstanceOf(Date);
        expect(sut.enroledAt).toBe(null);
        expect(sut.userType).toBe(UserType.STUDENT);
    });

});