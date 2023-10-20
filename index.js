const express = require('express');
const cors = require('cors');
const { categoryRouter } = require('./categeoryRouting');
const port  = 2926;
const app = express()
app.use(cors());

app.get('/', (request,response)=>{
    response.send('this is running')
})



app.use('/api',categoryRouter)

app.listen(port,()=>{
    try{
        console.log('port is running in 2926')
    }
    catch(err){
        console.log(`error :- ${err}`)
    }
})
