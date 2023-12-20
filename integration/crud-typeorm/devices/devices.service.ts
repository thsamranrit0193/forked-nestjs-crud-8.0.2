import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudRepository } from '@lab3dvlp/crud-typeorm';

import { Device } from './device.entity';

@Injectable()
export class DevicesService extends TypeOrmCrudRepository<Device> {
  constructor(@InjectRepository(Device) repo) {
    super(repo);
  }
}
