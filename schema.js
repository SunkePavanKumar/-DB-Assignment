const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const productCategorySchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  modifiedAt: {
    type: Date,
    default: Date.now,
  },
  deletedAt: {
    type: Date,
  },
});

const productInventorySchema = new Schema({
  quantity: {
    type: Number,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  modifiedAt: {
    type: Date,
    default: Date.now,
  },
  deletedAt: {
    type: Date,
  },
});

const discountSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
  },
  discountPercent: {
    type: Number,
    required: true,
  },
  active: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  modifiedAt: {
    type: Date,
    default: Date.now,
  },
  deletedAt: {
    type: Date,
  },
});

const productSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
  },
  SKU: {
    type: String,
    required: true,
  },
  categoryId: {
    type: Schema.Types.ObjectId,
    ref: "ProductCategory",
    required: true,
  },
  inventoryId: {
    type: Schema.Types.ObjectId,
    ref: "ProductInventory",
  },
  price: {
    type: Number,
    required: true,
  },
  discountId: {
    type: Schema.Types.ObjectId,
    ref: "Discount",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  modifiedAt: {
    type: Date,
    default: Date.now,
  },
  deletedAt: {
    type: Date,
  },
});

module.exports = {
  ProductCategory: mongoose.model("ProductCategory", productCategorySchema),
  ProductInventory: mongoose.model("ProductInventory", productInventorySchema),
  Discount: mongoose.model("Discount", discountSchema),
  Product: mongoose.model("Product", productSchema),
};
