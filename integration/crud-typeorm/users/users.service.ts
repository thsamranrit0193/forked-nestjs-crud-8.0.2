import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudRepository } from '@lab3dvlp/crud-typeorm';

import { User } from './user.entity';

@Injectable()
export class UsersService extends TypeOrmCrudRepository<User> {
  constructor(@InjectRepository(User) repo) {
    super(repo);
  }
}
