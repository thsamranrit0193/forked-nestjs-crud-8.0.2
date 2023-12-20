import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { TypeOrmCrudRepository } from '../../src/typeorm-crud.repository';
import { Note } from '../../../../integration/crud-typeorm/notes';

@Injectable()
export class NotesService extends TypeOrmCrudRepository<Note> {
  constructor(@InjectRepository(Note) repo) {
    super(repo);
  }
}
