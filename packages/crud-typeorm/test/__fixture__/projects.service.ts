import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { TypeOrmCrudRepository } from '../../src/typeorm-crud.repository';
import { Project } from '../../../../integration/crud-typeorm/projects';

@Injectable()
export class ProjectsService extends TypeOrmCrudRepository<Project> {
  constructor(@InjectRepository(Project) repo) {
    super(repo);
  }
}
