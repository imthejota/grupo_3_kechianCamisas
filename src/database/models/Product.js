module.exports = (sequelize, dataTypes) => {
    let alias = 'Product';
    let cols = {
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
            type: dataTypes.STRING
        },
        price: {
            type: dataTypes.INTEGER
        },
        discount: {
            type: dataTypes.INTEGER
        },
        image: {
            type: dataTypes.STRING
        }
    };
    let config = {
        tableName: 'products',
        timestamps: false,
    }
    const Product = sequelize.define(alias, cols, config);

    Product.associate = function(models){/* {
        Product.hasMany(models.Image, {
            as: "image",
            foreignKey:"product_id"
        }) */
        Product.belongsToMany(models.Size, {
            as: "sizes",
            through: "product_size",
            foreignKey:"product_id",
            otherKey:"size_id",
            timestamps:false
        });
    }

    return Product;
}