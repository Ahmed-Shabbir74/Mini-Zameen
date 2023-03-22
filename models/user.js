const sequelize = require("../config")
const { Sequelize, DataTypes } = require("sequelize");

const User = sequelize.define("users", {
    UserID: {
      type: DataTypes.INTEGER,
    },
    Name: {
      type: DataTypes.STRING,
    },
    Email: {
      type: DataTypes.STRING,
    },
    Password: {
        type: DataTypes.STRING,
    }

 });

 sequelize.sync().then(() => {
  console.log('user table created successfully!');
}).catch((error) => {
  console.error('Unable to create table : ', error);
});

 


 module.exports = User