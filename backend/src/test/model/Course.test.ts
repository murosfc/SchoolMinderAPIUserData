import { Course } from "../../model/Course";

describe('Course', () => {
    it('should create a new course', () => {
        const sut = new Course('Desafios da atualidade');
        expect(sut).toBeInstanceOf(Course);
        expect(sut.id).toBe(0);        
    });

    it('All getters and setters should work', () => {
        const sut = new Course('Desafios da atualidade');
        sut.id = 1;
        sut.title = 'Desafios da atualidade 2.0';
        sut.createdAt = new Date();
        sut.modifiedAt = new Date();
        expect(sut.id).toBe(1);
        expect(sut.title).toBe('Desafios da atualidade 2.0');
        expect(sut.createdAt).toBeInstanceOf(Date);
        expect(sut.modifiedAt).toBeInstanceOf(Date);
    });
});