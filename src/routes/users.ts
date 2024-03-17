import { Router} from "express";
import { createUser } from "../controllers/users";
import { sanitisePassword } from "../util/security";

const route = Router()

route.post('/createUser',async (req,res)=>{
      try{
        const user =  await createUser(req.body.user)
        sanitisePassword(user)
        res.status(200).json({user})
      }catch(e){
        res.status(400).json({
            "errors":{
                "body":[(e as Error).message]
            }
        })

      }
})

export const usersRoute=route