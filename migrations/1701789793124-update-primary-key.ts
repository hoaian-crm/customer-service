import { MigrationInterface, QueryRunner } from 'typeorm';

export class UpdatePrimaryKey1701789793124 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      alter table customers add primary key(id)
`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      alter table customers drop constraint id cascade
`);
  }
}
