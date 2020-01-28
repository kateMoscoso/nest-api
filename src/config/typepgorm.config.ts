import { TypeOrmModuleOptions } from "@nestjs/typeorm";

export const typePgOrmConfig: TypeOrmModuleOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'root',
    database: 'taskmanagement',
    entities: [__dirname + "/../**/*.entity{.ts,.js}"],
    synchronize: true
};

// {
//     type: 'postgres',
//     host: 'localhost',
//     port: 5432,
//     username: 'postgres',
//     password: 'postgres',
//     database: 'taskmanagement',
//     entities: [__dirname + "/../**/*.entity{.ts,.js}"],
//     synchronize: true
// }