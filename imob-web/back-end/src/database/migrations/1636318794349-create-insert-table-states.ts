import { MigrationInterface, QueryRunner } from "typeorm";

export class createInsertTableStates1636318794349 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("INSERT INTO public.states VALUES (DEFAULT, 'acre', 'AC')");
        await queryRunner.query("INSERT INTO public.states VALUES (DEFAULT, 'alagoas', 'AL')");
        await queryRunner.query("INSERT INTO public.states VALUES (DEFAULT, 'amapá', 'AP')");
        await queryRunner.query("INSERT INTO public.states VALUES (DEFAULT, 'amazonas', 'AM')");
        await queryRunner.query("INSERT INTO public.states VALUES (DEFAULT, 'bahia', 'BA')");
        await queryRunner.query("INSERT INTO public.states VALUES (DEFAULT, 'ceará', 'CE')");
        await queryRunner.query("INSERT INTO public.states VALUES (DEFAULT, 'espírito santo', 'ES')");
        await queryRunner.query("INSERT INTO public.states VALUES (DEFAULT, 'goiás', 'GO')");
        await queryRunner.query("INSERT INTO public.states VALUES (DEFAULT, 'maranhão', 'MA')");
        await queryRunner.query("INSERT INTO public.states VALUES (DEFAULT, 'mato grosso', 'MT')");
        await queryRunner.query("INSERT INTO public.states VALUES (DEFAULT, 'mato grosso do sul', 'MS')");
        await queryRunner.query("INSERT INTO public.states VALUES (DEFAULT, 'minas gerais', 'MG')");
        await queryRunner.query("INSERT INTO public.states VALUES (DEFAULT, 'pará', 'PA')");
        await queryRunner.query("INSERT INTO public.states VALUES (DEFAULT, 'paraíba', 'PB')");
        await queryRunner.query("INSERT INTO public.states VALUES (DEFAULT, 'paraná', 'PR')");
        await queryRunner.query("INSERT INTO public.states VALUES (DEFAULT, 'pernambuco', 'PE')");
        await queryRunner.query("INSERT INTO public.states VALUES (DEFAULT, 'piauí', 'PI')");
        await queryRunner.query("INSERT INTO public.states VALUES (DEFAULT, 'rio de janeiro', 'RJ')");
        await queryRunner.query("INSERT INTO public.states VALUES (DEFAULT, 'rio grande do norte', 'RN')");
        await queryRunner.query("INSERT INTO public.states VALUES (DEFAULT, 'rio grande do sul', 'RS')");
        await queryRunner.query("INSERT INTO public.states VALUES (DEFAULT, 'rondônia', 'RO')");
        await queryRunner.query("INSERT INTO public.states VALUES (DEFAULT, 'roraima', 'RR')");
        await queryRunner.query("INSERT INTO public.states VALUES (DEFAULT, 'santa catarina', 'SC')");
        await queryRunner.query("INSERT INTO public.states VALUES (DEFAULT, 'são paulo', 'SP')");
        await queryRunner.query("INSERT INTO public.states VALUES (DEFAULT, 'sergipe', 'SE')");
        await queryRunner.query("INSERT INTO public.states VALUES (DEFAULT, 'tocantins', 'TO')");
        await queryRunner.query("INSERT INTO public.states VALUES (DEFAULT, 'distrito federal', 'DF')");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('TRUNCATE TABLE public.states');
    }

}
