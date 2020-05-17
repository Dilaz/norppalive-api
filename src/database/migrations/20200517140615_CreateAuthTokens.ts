import * as Knex from "knex";

const tableName = 'auth_tokens';

export async function up(knex: Knex): Promise<any> {
    return knex.schema.createTable(tableName, t => {
        t.increments();

        t.string('token')
            .notNullable()
            .unique();

        t.dateTime('expires_at', { precision: 6 });
        t.timestamps();
    });
}


export async function down(knex: Knex): Promise<any> {
    return knex.schema.dropTable(tableName);
}

