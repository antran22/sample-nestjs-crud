import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as path from 'node:path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CompanyModule } from './company/company.module';

@Module({
  imports: [
    CompanyModule,
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db/sql.db', // This will create a sql.db file in the db folder
      entities: [path.join(__dirname, '**', '*.entity.{ts,js}')],
      synchronize: true, // Set to false in production
      autoLoadEntities: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
