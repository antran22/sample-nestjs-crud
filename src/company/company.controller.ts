import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';

import { CompanyEntity } from './company.entity';
import { CompanyService } from './company.service';

@Crud({
  model: {
    type: CompanyEntity,
  },
})
@Controller('companies')
export class CompanyController implements CrudController<CompanyEntity> {
  constructor(public service: CompanyService) {}
}
