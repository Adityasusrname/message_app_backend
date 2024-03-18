import { getRepository } from "typeorm"
import { User } from "../entities/user"
import { psqlDataSource } from "../server"
import { hashPassword } from "../util/password"
import { generateToken } from "../util/jwt"


interface signupUser{
    Username:string,
    Password:string,
    Bio:string,
    Image:string
}


export async function createUser(data:signupUser):Promise<User>{

    if(!data.Username) throw new Error('Username is not provided')
    if(!data.Password) throw new Error('Password is not provided!')

    const repo = await psqlDataSource.getRepository(User)

    const existingUser = await repo.findOne({
        where:{
            Username:data.Username
        }
    })

    if(existingUser) throw new Error('User already exists!')

    try{
        const hashedPassword = await hashPassword(data.Password)
        const user =    new User(data.Username,hashedPassword)
        const newUser = await repo.save(user)
        newUser.Token = await generateToken(newUser.Username,newUser.Password) //Attaching token to 'newUser' object
        return newUser
    }
    catch(e){
        throw e
    }

}