const { where } = require('sequelize')
const db= require('../model')

const Product= db.product
const Review= db.Review

const addProduct=async(req,res)=>{
    let info={
        title:req.body.title,
        price:req.body.price,
        description:req.body.description,
        published:req.body.published ? req.body.published:false
    }
    const product = await Product.create(info)
    res.status(200).send(product)
    console.log(product)
}
/////////////////////////////

const getAllproduct=async (req,res)=>{
    let products=await Product.findAll({
        // attributes:[
        //     'title',
        //     'price'
        // ]
    })
    res.status(200).send(products)
}
/////////////////////////////

const getOneproduct=async (req,res)=>{
    let id=req.params.id
    let product=await Product.findOne({where:{id:id}
    })
    res.status(200).send(product)
}
//////////////////////////////
const updateproduct=async (req,res)=>{

    let id =req.params.id

    const product= await Product.update(req.body,{where:{id:id}})
    res.status(200).send(product)
}
///////////////////////////////
const deleteproduct=async (req,res)=>{
    let id=req.params.id
    await Product.destroy({ where:{id :id}})
    res.status(200).send('product is deleted')
}
////////////////////////////////
const getPubproduct=async (req,res)=>{
    const Products=    await Product.findAll({where:{published:true}})
    res.status(200).send(Products)
}


//connect one to many relation pro and review
const getProductReview=async(req,res)=>{
    const id = req.params.id;
    const data=await Product.findOne({
        include:[{
            model:Review,
            as:'review'
    }],
    where :{id:id}
    })
    res.status(200).send(data)
}


module.exports={
    addProduct,
    getAllproduct,
    getOneproduct,
    updateproduct,
    deleteproduct,
    getPubproduct,
    getProductReview
}



