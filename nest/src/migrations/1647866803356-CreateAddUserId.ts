import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateAddUserId1647866803356 implements MigrationInterface {
    name = 'CreateAddUserId1647866803356'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "item" DROP CONSTRAINT "FK_5369db3bd33839fd3b0dd5525d1"`, undefined);
        await queryRunner.query(`ALTER TABLE "item" DROP COLUMN "userId"`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "item" ADD "userId" uuid NOT NULL`, undefined);
        await queryRunner.query(`ALTER TABLE "item" ADD CONSTRAINT "FK_5369db3bd33839fd3b0dd5525d1" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
    }

}
