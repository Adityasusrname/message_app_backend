import express from 'express'
import { DataSource } from 'typeorm'
import { User } from './entities/user'
import { usersRoute } from './routes/users'


const app = express()

export const psqlDataSource = new DataSource({


    type:'postgres',
    username:'aditya',     //TODO:Move it to a config file
    password:'open',       //TODO:Move it to a config value
    database:'message_app',
    entities:[User],
    synchronize:true,
    dropSchema:true,
    logging:true,
    logger:'advanced-console'
    

})

app.use(express.json())

app.use('/users',usersRoute)

app.get('/',(req,res)=>{
    res.send('Hello World!')
})


async function start(){

    try{
        await psqlDataSource.initialize()
    }
    catch(e){
       console.log((e as Error).message)
    }

    app.listen(3232,()=>{

        console.log('Server started at http://localhost:3232')
    
    })


}

start()