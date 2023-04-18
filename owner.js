const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../app");

const Owner = sequelize.define("Owner", {
  ownerid: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true
  },
  ownerpassword: {
    type: DataTypes.STRING,
    allowNull: false
  },
  firstname: {
    type: DataTypes.STRING,
    allowNull: false
  },
  middlename: {
    type: DataTypes.STRING,
    allowNull: true
  },
  lastname: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  phonenumber: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      len: [10, 10]
    }
  },
  address: {
    type: DataTypes.STRING,
    allowNull: true
  }
});

module.exports = Owner;
