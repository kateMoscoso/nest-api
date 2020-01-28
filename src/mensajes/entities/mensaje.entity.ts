import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
//Declaracion de la entidad que define en la base de datos
@Entity()
export class Mensaje {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nick: string;

  @Column()
  mensaje: string;
}
