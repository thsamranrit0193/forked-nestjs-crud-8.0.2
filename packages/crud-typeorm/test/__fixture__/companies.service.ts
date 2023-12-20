import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { TypeOrmCrudRepository } from '../../src/typeorm-crud.repository';
import { Company } from '../../../../integration/crud-typeorm/companies';

@Injectable()
export class CompaniesService extends TypeOrmCrudRepository<Company> {
  constructor(@InjectRepository(Company) repo) {
    super(repo);
  }
}
