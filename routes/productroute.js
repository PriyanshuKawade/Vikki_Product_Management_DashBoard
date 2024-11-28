const productControl=require('../controller/productcont.js')
const reviewcont=require('../controller/reviewcont.js')




const router=require('express').Router();
router.post('/addproduct',productControl.addProduct)
router.get('/getallproduct',productControl.getAllproduct)
router.get('/published',productControl.getPubproduct)

//////////////////
router.post('/addReview/:id',reviewcont.addReview)
router.get('/getAllReview',reviewcont.getAllReview)
///get product
router.get('/getproreview/:id',productControl.getProductReview)



router.get('/:id',productControl.getOneproduct)
router.put('/:id',productControl.updateproduct)
router.delete('/:id',productControl.deleteproduct)

module.exports=router



