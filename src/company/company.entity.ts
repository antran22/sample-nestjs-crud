import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class CompanyEntity {
  @PrimaryGeneratedColumn() id: number;

  @Column() name: string;
}
