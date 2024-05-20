const { Sequelize, Model, DataTypes } = require('sequelize');
const { toDefaultValue } = require('sequelize/lib/utils');

const sequelize =new Sequelize("productosbd", "root", "", {
    host: "localhost",
    dialect: "mysql"
});

class Product extends Model {}

Product.init({
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    product_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    price: {
        type: DataTypes.FLOAT(10, 2),
        allowNull: false,
    },
    is_stock: {
        type: DataTypes.BOOLEAN,
    }
}, {
    sequelize,
    modelName: "Product",
});

module.exports = Product;

//async function testConnection() {
//    try{
//        await sequelize.authenticate();
//        console.log("All Good")
//    }catch(error) {
//        console.error(error)
//    }
//};

//testConnection();
