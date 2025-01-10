import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CompanyEntity } from './company.entity';

@Injectable()
export class CompanyRepository extends Repository<CompanyEntity> {}
