import {
  Controller,
  Post,
  Body,
  Get,
  Put,
  Delete,
  Res,
  HttpStatus,
  Param
} from "@nestjs/common";
import { CreateMensajeDto } from "./dto/create-mensaje-dto";
import { MensajesService } from "./mensajes.service";

//Dto encapsular la informacion que nos llega para recibirla en tipo objeto
@Controller("mensajes")
export class MensajesController {
  constructor(private mensajesService: MensajesService) {}
  @Post()
  create(@Body() createMensajeDto: CreateMensajeDto, @Res() response) { //handler
    this.mensajesService
      .createMensaje(createMensajeDto)
      .then(mensaje => {
        response.status(HttpStatus.CREATED).json(mensaje);
      })
      .catch(() => {
        response
          .status(HttpStatus.FORBIDDEN)
          .json({ mensaje: "error al crear mensaje" });
      });
  }

  @Get()
  getAll(@Res() response) {
    this.mensajesService
      .getAll()
      .then(mensajeList => {
        response.status(HttpStatus.OK).json(mensajeList);
      })
      .catch(() => {
        response
          .status(HttpStatus.FORBIDDEN)
          .json({ mensaje: "error al crear mensaje" });
      });
  }

  @Put(":id")
  update(
    @Body() updateMensajeDto: CreateMensajeDto,
    @Res() response,
    @Param("id") idMensaje
  ) {
    this.mensajesService
      .updateMensaje(idMensaje, updateMensajeDto)
      .then(mensaje => {
        response.status(HttpStatus.OK).json(mensaje);
      })
      .catch(() => {
        response
          .status(HttpStatus.FORBIDDEN)
          .json({ mensaje: "error en la edición del mensaje" });
      });
  }

  @Delete(":id")
  delete(@Res() response, @Param("id") idMensaje) {
    this.mensajesService
      .deleteMensaje(idMensaje)
      .then(res => {
        response.status(HttpStatus.OK).json(res);
      })
      .catch(() => {
        response
          .status(HttpStatus.FORBIDDEN)
          .json({ mensaje: "error en la eliminacion del mensaje" });
      });
  }
}
