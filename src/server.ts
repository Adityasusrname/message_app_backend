import express from 'express'


const app = express()

app.get('/',(req,res)=>{
    res.send('Hello World!')
})

app.listen(3232,()=>{

    console.log('Server started at http://localhost:3232')

})