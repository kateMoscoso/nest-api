import { Module } from "@nestjs/common";
import { MensajesController } from "./mensajes/mensajes.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { MensajesService } from "./mensajes/mensajes.service";
import { Mensaje } from "./mensajes/entities/mensaje.entity";
import { TasksModule } from './tasks/tasks.module';
//import { typePgOrmConfig } from "./config/typepgorm.config";
import { typeOrmSQlConfig } from "./config/typesqlorm.config";
import { AuthModule } from './auth/auth.module';

//decorador @module que indica que es un modulo
//imports que va a usar el modulo
//controladores del modulo
//providers servicios donde se encuentra los metodos de acceso a los datos
// imports indicamos que queremos importar la entidad mensaje, asi inyectamos en todos los componentes d enuestro modulo, la entidad mensaje para poder usarla
// en los providers se deben guardar los service
@Module({
  imports: [
   TypeOrmModule.forRoot(typeOrmSQlConfig),
   TypeOrmModule.forFeature([Mensaje]),
    TasksModule,
    AuthModule
  ],
  controllers: [MensajesController],
  providers: [MensajesService]
})
export class AppModule {}
