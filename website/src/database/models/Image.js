module.exports = (sequelize, dataTypes) => {
    let alias = 'Image';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement:true
        },
        product_id: {
            type: dataTypes.STRING
        },
        name: {
            type: dataTypes.STRING
        }
    };
    let config = {
        tableName: 'images',
        timestamps: false,
    }
    const Image = sequelize.define(alias, cols, config);

    Image.associate = function(models){
        Image.belongsTo(models.Product, {
            as: "product",
            foreignKey:"product_id"
        });
    }

    return Image;
}