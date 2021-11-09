import asyncHandler from 'express-async-handler';
import Order from '../models/orderModel';




// @desc      Create new order
// @route     POST /api/orders
// @access    Private

const addOrderItems = asyncHandler(async (req, res) => {
  const {
    orderItems,
    shippingAddress,
    paymentMethod,
    itemsPrice,
    taxPrice,
    shippingPrice,
    totalPrice,
  } = req.body


  // make sure not empty
  if (orderItems && orderItems.length === 0) {
    res.status(400)
    throw new Error('No Order Items')
    return
  } else {
    // new order in the database
    const order = new Order({
      orderItems,
      user: req.user._id,
      shippingAddress,
      paymentMethod,
      itemsPrice,
      taxPrice,
      shippingPrice,
      totalPrice,
    })

    const createdOrder = await order.save();

    res.status(201).json(createdOrder)
  }


})

