import {Column, Entity, PrimaryColumn} from 'typeorm'


@Entity('users')
export class User{

  @PrimaryColumn()
  Username:string

  @Column()
  Password:string

  @Column()
  Bio:string

  @Column()
  Image:string

}