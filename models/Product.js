const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema Product
const ProductSchema = new Schema({
  SanPham: {
    type: String,
    required: true
  },
  DanhMucSanPham: {
    type: String,
    required: true
  },
  GiaTien: {
    type: Number,
    default: 0.0
  },
  URLHinhAnh: {
    type: String,
    required: false
  },
  Mota: {
    type: String,
    require: false
  },
  
}, { collection: 'Database', versionKey: false });

ProductSchema
.virtual('url')
.get(function () {
    return '/product/' + this._id;
});
module.exports = Product = mongoose.model("products", ProductSchema);