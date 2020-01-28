import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";

//instancia de nest factory
async function bootstrap() {
  //carga del modulo principal
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
