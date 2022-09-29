module.exports = (sequelize, dataTypes) => {
    let alias = 'User';
    let cols = {
        //id, name, description, category, price, discount
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement:true
        },
        firstName: {
            type: dataTypes.STRING
        },
        lastName: {
            type: dataTypes.STRING
        },
         location: {
            type: dataTypes.STRING
         },
         email: {
            type: dataTypes.STRING
         },
         password: {
            type: dataTypes.STRING
         },
         category: {
            type: dataTypes.STRING
         },
         image: {
            type: dataTypes.STRING
         }
    };
    let config = {
        tableName: 'users',
        timestamps: false,
    }
    const User = sequelize.define(alias, cols, config);
    return User;
}