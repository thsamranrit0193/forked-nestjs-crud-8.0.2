import { CreateManyDto, CrudRequest, GetManyDefaultResponse } from '../interfaces';
import { CrudRepository } from '../repositories';
export interface CrudController<T> {
    repository: CrudRepository<T>;
    getManyBase?(req: CrudRequest): Promise<GetManyDefaultResponse<T> | T[]>;
    getOneBase?(req: CrudRequest): Promise<T>;
    createOneBase?(req: CrudRequest, dto: T): Promise<T>;
    createManyBase?(req: CrudRequest, dto: CreateManyDto<T>): Promise<T[]>;
    updateOneBase?(req: CrudRequest, dto: Partial<T>): Promise<T>;
    replaceOneBase?(req: CrudRequest, dto: T): Promise<T>;
    deleteOneBase?(req: CrudRequest): Promise<void | T>;
    recoverOneBase?(req: CrudRequest): Promise<void | T>;
}
