import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialSchema1757705398219 implements MigrationInterface {
    name = 'InitialSchema1757705398219'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "product" ("id" SERIAL NOT NULL, "sku" character varying, "name" character varying NOT NULL, "short_description" text, "description" text, "additional_information" text, "price" numeric NOT NULL, "imageUrls" text array, "category" character varying, "is_new" boolean NOT NULL DEFAULT false, "discount_percentage" numeric(5,2) NOT NULL DEFAULT '0', "tags" text array, "colors" text array, "sizes" text array, "rating" numeric(2,1) NOT NULL DEFAULT '0', "review_count" integer NOT NULL DEFAULT '0', CONSTRAINT "UQ_34f6ca1cd897cc926bdcca1ca39" UNIQUE ("sku"), CONSTRAINT "PK_bebc9158e480b949565b4dc7a82" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "category" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "imageUrl" character varying NOT NULL, CONSTRAINT "UQ_23c05c292c439d77b0de816b500" UNIQUE ("name"), CONSTRAINT "PK_9c4e4a89e3674fc9f382d733f03" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "category"`);
        await queryRunner.query(`DROP TABLE "product"`);
    }

}
