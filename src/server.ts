import express from 'express';

const app = express();

app.get("/", (request, response)=>{
    return response.json({message:"ola mundo"})
})

app.listen(3333);
