const sequelize = require("../config")
const { Sequelize, DataTypes } = require("sequelize");


const plot = sequelize.define("plot", {
    Name: {
      type: DataTypes.STRING,
    },
    picePkr: {
      type: DataTypes.INTEGER,
    },
    typeOfplot: {
        type: DataTypes.STRING,
    }

 });
 sequelize.sync().then(() => {
  console.log('plot table created successfully!');
}).catch((error) => {
  console.error('Unable to create table : ', error);
});


 module.exports = plot