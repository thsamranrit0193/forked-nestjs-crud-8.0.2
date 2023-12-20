import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudRepository } from '@lab3dvlp/crud-typeorm';

import { UserProject } from './user-project.entity';

@Injectable()
export class UserProjectsService extends TypeOrmCrudRepository<UserProject> {
  constructor(@InjectRepository(UserProject) repo) {
    super(repo);
  }
}
