import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudRepository } from '../../../packages/crud-typeorm/src';

import { Note } from './note.entity';

@Injectable()
export class NotesService extends TypeOrmCrudRepository<Note> {
  constructor(@InjectRepository(Note) repo) {
    super(repo);
  }
}
