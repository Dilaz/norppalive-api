import * as Knex from "knex";


const tableName = 'detections';

export async function up(knex: Knex): Promise<any> {
    return knex.schema.createTable(tableName, t => {
        t.increments();

        t.string('label')
            .notNullable();

        t.integer('confidence').notNullable();

        // t.string('url').notNullable();

        t.json('coordinates').notNullable();

        t.timestamps().notNullable();

        t.index('created_at');
    });
}


export async function down(knex: Knex): Promise<any> {
    return knex.schema.dropTable(tableName);
}

