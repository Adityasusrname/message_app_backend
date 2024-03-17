import { text } from 'stream/consumers'
import {Column, Entity, PrimaryColumn} from 'typeorm'


@Entity('users')
export class User{

  @PrimaryColumn()
  Username:string

  @Column()
  Password?:string

  @Column({nullable:true,type:'text'})
  Bio?:string

  @Column({nullable:true})
  Image?:string

  constructor(Username:string,Password:string){
    this.Username=Username
    this.Password=Password
  }

}