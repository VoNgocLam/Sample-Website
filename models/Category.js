const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema Category
const CategorySchema = new Schema({
  DanhMucSanPham: {
    type: String,
    required: true
  },
  Link: {
    type: String,
    required: true
  }
}, { collection: 'categories', versionKey: false });

module.exports = Category = mongoose.model("categories", CategorySchema);