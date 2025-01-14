const db= require('../model')

const Review=db.reviews

/////////////////
const addReview=async(req,res)=>{
    const id=req.param.id
    let data={
        product_id:id,
        rating:req.body.rating,
        description:req.body.description
    }
    const review=await Review.create(data)
    res.status(200).send(review)
}

//////////////////////
const getAllReview=async(req,res)=>{
    const reviews=await Review.findAll({})
    res.status(200).send(reviews)
}

module.exports={
    addReview,
    getAllReview
}


