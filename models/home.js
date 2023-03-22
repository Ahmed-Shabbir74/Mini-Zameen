const sequelize = require("../config")
const { Sequelize, DataTypes } = require("sequelize");

const home = sequelize.define("home", {
    homeName: {
      type: DataTypes.STRING,
    },
    loc: {
      type: DataTypes.STRING,
    },
    color: {
      type: DataTypes.STRING,
    },
    price: {
        type: DataTypes.INTEGER,
    }

 });
 sequelize.sync().then(() => {
  console.log('home table created successfully!');
}).catch((error) => {
  console.error('Unable to create table : ', error);
});

 module.exports = home