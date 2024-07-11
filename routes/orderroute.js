
const express = require("express")
const router = express.Router()
const OrderModel = require("../modals/orderSchema")

router.post('/create', async (req, res) => {
  const { user, orderItems, totalPrice, shippingDetails } = req.body;

  try {
    const newOrder = new OrderModel({
      user,
      orderItems,
      totalPrice,
      shippingDetails
    });

    const savedOrder = await newOrder.save();
    res.status(201).json({ success: true, order: savedOrder });
  } catch (error) {
    console.error('Error placing order:', error);
    res.status(500).json({ success: false, message: 'Server Error' });
  }
});

module.exports= router