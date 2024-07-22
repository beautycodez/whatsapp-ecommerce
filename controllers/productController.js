const utilities = require("../utilities");
const productController = {};

productController.buildProductPage = async function (req, res, next) {
    const URL = 'https://api.escuelajs.co/api/v1/products'
    const dataProduct = await utilities.getDataProducts(URL);
    console.log(dataProduct[0]);
    const categoryId = req.params.categoryId;
    console.log(categoryId);
    const dataByCategory = await utilities.getDataByIdCategory(dataProduct, categoryId);
    console.log(dataByCategory);
    const categoryName = dataByCategory[0].category.name;
    const productsHtml = await utilities.productsByCategoryHtml(dataByCategory);


    res.render("product/category", {
        title: categoryName,
        productsHtml: productsHtml
    })
}

module.exports = productController;