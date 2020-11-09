module.exports = (sequelize, dataTypes) => {
    let alias = 'Product';
    let cols = {

        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        
        title: {
            type: dataTypes.STRING
        },

        description: {
            type: dataTypes.STRING
        },

        price: {
            type: dataTypes.INTEGER
        }, 

        category: {
            type: dataTypes.STRING
        },
        
        createdAt: {
            type: dataTypes.DATE
        },

        updatedAt: {
            type: dataTypes.DATE
        }, 

        deletedAt: {
            type: dataTypes.DATE
        }
    };

    let config = {
        tableName: 'products'
    }
    const Product = sequelize.define(alias, cols, config);
    return Product;
}

