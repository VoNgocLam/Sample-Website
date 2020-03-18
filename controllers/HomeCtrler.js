var Product = require('../models/Product');
var Category = require('../models/Category');

exports.shopShow = async (req, res, next) => {
	let cates = await Category.find({});
	let products;
	let titleToy;
    
	if (!req.query.category) {
		titleToy = 'Dolls';
		products = await Product.find({});
	} else {
        let cateName = await Category.findOne({ Link: req.query.category });
        products = await Product.find({DanhMucSanPham:cateName.DanhMucSanPham});
        titleToy = cateName.name;
	}
    
	res.render('shop', { categories: cates, products, titleToy });
};

exports.productDetail = async (req, res, next) => {
    let cates = await Category.find({});
    let product = await Product.findById(req.params.id);
    //console.log(product);
    console.log('Product Detail');
    console.log(product);
    if (!product) res.redirect('/shop');
    res.render('single', { categories: cates, product });
};

exports.show = async (req, res, next) => {
    let products = await Product.find({});
    let cates = await Category.find({});
  
    res.render('index', { categories:cates, products});
};
