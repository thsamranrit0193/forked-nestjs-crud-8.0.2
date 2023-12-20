import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { TypeOrmCrudRepository } from '../../src/typeorm-crud.repository';
import { User } from '../../../../integration/crud-typeorm/users';

@Injectable()
export class UsersService extends TypeOrmCrudRepository<User> {
  constructor(@InjectRepository(User) repo) {
    super(repo);
  }
}

@Injectable()
export class UsersService2 extends TypeOrmCrudRepository<User> {
  constructor(@InjectRepository(User) repo) {
    super(repo);
  }
}
