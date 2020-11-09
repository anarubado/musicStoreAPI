let db = require('../../database/models');

const apiInfoController = {
    list: function(req, res) {
        db.Product.findAll()
            .then(function(products) {
                let api = {
                    meta: {
                        status: 200,
                        quantity: products.length,
                        url: req.originalUrl
                    },
        
                    data: {   
                        products: products.map(product => {
                            return ({
                                id: product.id,
                                title: product.title,
                                description: product.description,
                                price: product.price,
                                category: product.category
                            })
                        })          
                        
                    }
                }
                res.json(api);

            })
        
        

    } 
}

module.exports = apiInfoController;