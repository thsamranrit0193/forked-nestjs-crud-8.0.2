import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { TypeOrmCrudRepository } from '../../src/typeorm-crud.repository';
import { Device } from '../../../../integration/crud-typeorm/devices';

@Injectable()
export class DevicesService extends TypeOrmCrudRepository<Device> {
  constructor(@InjectRepository(Device) repo) {
    super(repo);
  }
}
