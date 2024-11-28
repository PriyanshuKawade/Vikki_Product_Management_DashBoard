const express = require('express')
const cors=require('cors')

const app= express()

// var corOptions={
//     origin:'https://localhost:8080'
// }


// // a
// app.use(cors(corOptions))



app.use(express.json())

app.use(express.urlencoded({extended:true}))
//routers
const router=require('../React/routes/productroute.js')
const db = require('./model/index.js')

app.use('/api/products',router)
//testing
app.get('/',(req,res)=>{
    
    res.json("Access-Control-Allow-Origin",{message:'heelo api'})
})
////
app.get('/api/search',(req,res)=>{
    const searchterm=req.query.name;
    const query=`Select * from products where title Like ?`;
    db.query(query,[`%${searchterm}%`],(err,result)=>{
        if(err){
            return res.status(500).json({error:err.message});
        }
        res.json(result);
    });
});
//port
const port=process.env.port || 8081

app.listen(port,()=>{
    console.log('server running')
})


