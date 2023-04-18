//jshint esversion:6
const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../app");

let registrationSchema = sequelize.define('Registration', {
    registrationid:{
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    propertyname:{
        type:DataTypes.STRING,
        allowNull: false
    },
    customername:{
        type:DataTypes.STRING,
        allowNull: false
    },
    registrationdate:{
        type:DataTypes.STRING,
        allowNull: false
    },
    registrationstatus:{
        type:DataTypes.STRING,
        allowNull: false 
    }
}, { 
    tableName: 'registration' 
});

module.exports = registrationSchema;
