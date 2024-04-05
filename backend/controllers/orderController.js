import asyncHandler from "../middleware/asyncHandler.js";
import Order from "../models/orderModel.js";

//@desc Create new order
//@route GET /api/orders
//@access Private

const addOrderItems = asyncHandler(async (req, res) => {
  res.send("Add order items");
});

//@desc Create new order
//@route GET /api/orders
//@access Private

const getMyOrders = asyncHandler(async (req, res) => {
  res.send("get my orders");
});

//@desc Create new order
//@route GET /api/orders/:id
//@access Private

const getOrderById = asyncHandler(async (req, res) => {
  res.send("get order by id");
});

//@desc Update Order to paid
//@route GET /api/orders/:id/pay
//@access Private/Admin

const updateOrderToPaid = asyncHandler(async (req, res) => {
  res.send("update order to paid");
});

//@desc Update Order to delivered
//@route GET /api/orders/:id/pay
//@access Private

const updateOrderToDelivered = asyncHandler(async (req, res) => {
  res.send("update order to delivered");
});

//@desc Update Order to delivered
//@route GET /api/orders
//@access Private/Admin

const getOrders = asyncHandler(async (req, res) => {
  res.send("get all orders");
});

export {
  addOrderItems,
  getMyOrders,
  getOrderById,
  updateOrderToPaid,
  updateOrderToDelivered,
  getOrders,
};
