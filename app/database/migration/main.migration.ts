import db from "../connection";
export const createTables = async () => {
    await db.schema
            .hasTable('users')
            .then(async exists => {
                if(exists) return;
                console.log('\t\t - Criando tabela de users')
                await db.schema.createTable('users', table => {
                    table.increments();
                    table.string('name', 55);
                    table.string('nickname', 30);
                    table.string('email', 100);
                    table.string('password', 255);
                    table.string('cellphone', 20);
                    table.timestamp('created_at').defaultTo(db.fn.now());
                    table.timestamp('updated_at').defaultTo(db.fn.now());
                })
            });
    
    await db.schema
            .hasTable('personais')
            .then(async exists => {
                if(exists) return;
                console.log('\t\t - Criando tabela de Personais')
                await db.schema.createTable('personais', table => {
                    table.increments();
                    table.integer('user_id').unsigned()
                    table.foreign('user_id').references('users.id');
                    table.timestamp('created_at').defaultTo(db.fn.now());
                    table.timestamp('updated_at').defaultTo(db.fn.now());
                })
            });
    await db.schema
            .hasTable('alunos')
            .then(async exists => {
                if(exists) return;
                console.log('\t\t - Criando tabela de Alunos')
                await db.schema.createTable('alunos', table => {
                    table.increments();
                    table.integer('user_id').unsigned()
                    table.foreign('user_id').references('users.id');
                    table.timestamp('created_at').defaultTo(db.fn.now());
                    table.timestamp('updated_at').defaultTo(db.fn.now());
                })
            });
    

    
    


}

export const dropTables = async () => {
    await db.schema.hasTable('personais').then(async exists => {
        if(!exists) return;
        console.log('\t\t - Deletando tabela personais');
        await db.schema.dropTable('personais');
    })
    await db.schema.hasTable('alunos').then(async exists => {
        if(!exists) return;
        console.log('\t\t - Deletando tabela alunos');
        await db.schema.dropTable('alunos');
    })
    await db.schema.hasTable('users').then(async exists => {
        if(!exists) return;
        console.log('\t\t - Deletando tabela user');
        await db.schema.dropTable('users');
    })
    
    
}