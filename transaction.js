const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../app");

const transactionSchema = sequelize.define("Transaction", {
  transactionid: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      notNull: { msg: "Transaction ID is required" },
    },
  },
  transactiondate: {
    type: DataTypes.DATE,
    allowNull: false,
    validate: {
      notNull: { msg: "Transaction date is required" },
    },
  },
  transactionmode: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notNull: { msg: "Transaction mode is required" },
    },
  },
  bankname: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notNull: { msg: "Bank name is required" },
    },
  },
  amtpaid: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      notNull: { msg: "Amount is required" },
    },
  },
  transactionstatus: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notNull: { msg: "Transaction status is required" },
    },
  },
  referencenum: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notNull: { msg: "Reference number is required" },
    },
  },
});

exports.Transaction = transactionSchema;
