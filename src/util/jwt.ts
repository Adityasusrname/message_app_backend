var jwt=require('jsonwebtoken')

const SECRET = 'a-very-very-hard-secret-to-guess'

interface userCred{
     Username:string,
     Password:string
}

export function generateToken(Username:string,Password:string|undefined):Promise<string>{
    return new Promise<string>((resolve,reject)=>{
        jwt.sign({Username:Username,Password:Password},SECRET,(err:any,token:string)=>{
            if(err) reject(err)
            resolve(token)
        })
    })
}

export function verifyToken(token:string):Promise<userCred>{
    return new Promise<userCred>((resolve,reject)=>{
        jwt.verify(token,SECRET,(err:any,decoded:object)=>{
            if(err) reject(err)
            resolve(decoded as userCred)
        })
    })
}