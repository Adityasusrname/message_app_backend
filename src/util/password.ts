const bcrypt = require('bcrypt')

const SALT_ROUNDS = 10 //TOD:Move this info to a config file

export function hashPassword(password:string):Promise<string>{
    return new Promise<string>((resolve,reject)=>{
        bcrypt.hash(password,SALT_ROUNDS,(err:any,hash:string)=>{
            if(err) return reject(err)
            resolve(hash)
        })
    })
}

export function comparePassword(password:string,hash:string):Promise<boolean>{
    return new Promise<boolean>((resolve,reject)=>{
        bcrypt.compare(password,hash,(err:any,result:boolean)=>{
            if(err) return reject(err)
            resolve(result)
        })
    })
}