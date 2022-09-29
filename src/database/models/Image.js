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
    return Image;
}