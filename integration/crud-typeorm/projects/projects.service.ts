import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudRepository } from '@lab3dvlp/crud-typeorm';

import { Project } from './project.entity';

@Injectable()
export class ProjectsService extends TypeOrmCrudRepository<Project> {
  constructor(@InjectRepository(Project) repo) {
    super(repo);
  }
}
