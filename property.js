//jshint esversion:6
const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../app");

let propertySchema = sequelize.define('property', {
    propertyid:{
        type:Number,
        allowNull: false,
        validate: {
            notNull: {
                msg: 'Enter ID'
            }
        }
    },
    propertyname:{
        type:String,
        allowNull: false,
        validate: {
            notNull: {
                msg: 'Property name is required !'
            }
        }
    },
    propertystatus:{
        type:String,
        allowNull: false,
        validate: {
            notNull: {
                msg: 'Status is required !'
            }
        }
    },
    propertytype:{
        type:String,
        allowNull: false,
        validate: {
            notNull: {
                msg: 'Type is required'
            }
        }
    },
    propertybhk:{
        type:String,
        allowNull: false,
        validate: {
            notNull: {
                msg: 'BHK is required'
            }
        }
    },
    area:{
        type:Number,
        allowNull: false,
        validate: {
            notNull: {
                msg: 'Area is required'
            }
        }
    },
    price:{
        type:Number,
        allowNull: false,
        validate: {
            notNull: {
                msg: 'Price is required'
            }
        }
    },
    location:{
        type:String,
        allowNull: false,
        validate: {
            notNull: {
                msg: 'Location is required'
            }
        }
    }
});

 module.exports = propertySchema;
