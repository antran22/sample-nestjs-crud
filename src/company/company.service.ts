import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Repository } from 'typeorm';

import { CompanyEntity } from './company.entity';

@Injectable()
export class CompanyService extends TypeOrmCrudService<CompanyEntity> {
  constructor(
    @InjectRepository(CompanyEntity) repo: Repository<CompanyEntity>,
  ) {
    super(repo);
  }
}
