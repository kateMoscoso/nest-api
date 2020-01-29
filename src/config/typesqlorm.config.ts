import { TypeOrmModuleOptions } from "@nestjs/typeorm";

export const typeOrmSQlConfig: TypeOrmModuleOptions = {
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "root",
    database: "test",
    entities: ["dist/**/*.entity{.ts,.js}"],
    synchronize: true,
        "extra": { "insecureAuth": true }
};