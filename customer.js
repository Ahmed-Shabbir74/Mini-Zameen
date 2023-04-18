//jshint esversion:6
const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../app");

let customerSchema = sequelize.define('customer', {
    customerid:{
        type:Number,
        allowNull: false,
        validate: {
            notNull: {
                msg: 'Enter ID'
            }
        }
    },
    customerpassword:{
        type:String,
        allowNull: false,
        validate: {
            notNull: {
                msg: 'Password is required'
            }
        }
    },
    firstname:{
        type:String,
        allowNull: false,
        validate: {
            notNull: {
                msg: 'First Name is required'
            }
        }
    },
    middlename:{
        type:String
    },
    lastname:{
        type:String,
        allowNull: false,
        validate: {
            notNull: {
                msg: 'Last name is required'
            }
        }
    },
    emailid:{
        type:String,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: {
                msg: 'Invalid e-mail.'
            }
        }
    },
    dateofbirth:{
        type:Date,
        allowNull: false,
        validate: {
            notNull: {
                msg: 'Birthdate is required'
            }
        }
    },
    phonenumber:{
        type:String,
        allowNull: false,
        validate: {
            notNull: {
                msg: 'Phone number is required'
            },
            len: {
                args: [10, 10],
                msg: 'Phone number must be exactly 10 digits'
            }
        }
    },
    occupation:{
        type:String,
        allowNull: false,
        validate: {
            notNull: {
                msg: 'Occupation is required'
            }
        }
    },
    annualincome:{
        type:Number,
        allowNull: false,
        validate: {
            notNull: {
                msg: 'Annual Income is required'
            }
        }
    },
    address:{
        type:String,
        allowNull: false,
        validate: {
            notNull: {
                msg: 'Address is required'
            }
        }
    }
});

module.exports = customerSchema;
