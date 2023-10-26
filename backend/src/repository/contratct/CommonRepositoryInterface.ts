export interface CommonRepositoryInterface<T>{   
    findAll(): T[];
    findById(id: number): T;     
    save(object: T): T;
    update(object: T): T;
    delete(id: number): boolean;     
}