import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudRepository } from '@lab3dvlp/crud-typeorm';

import { Company } from './company.entity';

@Injectable()
export class CompaniesService extends TypeOrmCrudRepository<Company> {
  constructor(@InjectRepository(Company) repo) {
    super(repo);
  }
}
