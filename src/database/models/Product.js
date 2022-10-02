module.exports = (sequelize, dataTypes) => {
    let alias = 'Product';
    let cols = {
        //id, name, description, category, price, discount
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement:true
        },
        name: {
            type: dataTypes.STRING
        },
         description: {
            type: dataTypes.STRING
         },
         category: {
            type: dataTypes.INTEGER
         },
         price: {
            type: dataTypes.INTEGER
         },
         discount: {
            type: dataTypes.INTEGER
         }
    };
    let config = {
        tableName: 'products',
        timestamps: false,
    }
    const Product = sequelize.define(alias, cols, config);

    Product.associate = function(models){
        Product.hasMany(models.Image, {
            as: "image",
            foreignKey:"product_id"
        });
    }

    return Product;
}