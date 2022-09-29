module.exports = (sequelize, dataTypes) => {
    let alias = 'Product_size';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement:true
        },
        product_id: {
            type: dataTypes.INTEGER
        },
        size_id:{
            type: dataTypes.INTEGER
        }
    };
    let config = {
        tableName: 'product_size',
        timestamps: false,
    }
    const Product_size = sequelize.define(alias, cols, config);
    return Product_size;
}