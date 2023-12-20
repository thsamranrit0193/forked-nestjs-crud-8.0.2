import { Injectable } from '@nestjs/common';
import { ParsedRequestParams } from '@lab3dvlp/crud-request';
import { CrudRequestOptions } from '../../../src/interfaces';

import { CreateManyDto, CrudRequest } from '../../../src/interfaces';
import { CrudRepository } from '../../../src/repositories';

@Injectable()
export class TestService<T> extends CrudRepository<T> {
  async getMany(req: CrudRequest): Promise<any> {
    return { req };
  }
  async getOne(req: CrudRequest): Promise<any> {
    return { req };
  }
  async createOne(req: CrudRequest, dto: T): Promise<any> {
    return { req, dto };
  }
  async createMany(req: CrudRequest, dto: CreateManyDto<T>): Promise<any> {
    return { req, dto };
  }
  async updateOne(req: CrudRequest, dto: T): Promise<any> {
    return { req, dto };
  }
  async replaceOne(req: CrudRequest, dto: T): Promise<any> {
    return { req, dto };
  }
  async deleteOne(req: CrudRequest): Promise<any> {
    return { req };
  }
  async recoverOne(req: CrudRequest): Promise<any> {
    return { req };
  }
  decidePagination(parsed: ParsedRequestParams, options: CrudRequestOptions): boolean {
    return true;
  }
}
