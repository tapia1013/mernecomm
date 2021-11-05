import express from 'express'
import asyncHandler from 'express-async-handler'
const router = express.Router()
import Product from '../models/productModel.js'







// @desc      Fetch all products
// @route     GET /api/products
// @access    Public
// asyncHandler is for us not having to try{}catch(){} everything
router.get('/', asyncHandler(async (req, res) => {
  const products = await Product.find({})

  res.json(products)
}))




// @desc      Fetch single product
// @route     GET /api/products/:id
// @access    Public
router.get('/:id', asyncHandler(async (req, res) => {
  // if theres an error with id ue ._id
  const product = await Product.findById(req.params.id)

  // check if theres a product
  if (product) {
    res.json(product)
  } else {
    res.status(404)
    throw new Error('Product not found')
  }

}))






export default router
