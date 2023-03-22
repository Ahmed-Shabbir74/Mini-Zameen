
const User = require("../models/user")
const sequelize = require("../config")
const express = require('express')
const app = express()
const homes = require("../models/home")
const plots = require("../models/plot")


////---------------------ADD----------------
const addInUserTable = (req , res) =>
{
    console.log( "body" , req.body.id);
 sequelize.sync().then(() => {
    console.log('Users table created successfully!');
 
    User.create({
        UserID: req.body.id,
        Name: req.body.name,
        Email: req.body.email,
        Password: req.body.pass
    }).then(rs => {
        console.log(rs)
        res.send("saved")
    }).catch((error) => {
        console.error('Failed to create a new record : ', error);
    });
 
 }).catch((error) => {
    console.error('Unable to create table : ', error);
 });


 

}

const addInhomeTable = (req , res) =>
{
sequelize.sync().then(() => {
    console.log('home table created successfully!');
 
    homes.create({
        homeName: req.body.homeName,
        loc: req.body.loc,
        color: req.body.color,
        price:req.body.price
    }).then(rs => {
        console.log(rs)
        res.send("saved")
    }).catch((error) => {
        console.error('Failed to create a new record : ', error);
        res.send("error")
    });
 
 }).catch((error) => {
    console.error('Unable to create table : ', error);
    res.send("table error")

 });

}

const addInplotTable = (req , res) =>
{
    sequelize.sync().then(() => {
        console.log('Users table created successfully!');
     
        plot.create({
            Name: req.body.Name,
            picePkr: req.body.picePkr,
            typeOfPlot: req.body.typeOfPlot
        }).then(rs => {
            console.log(rs)
            res.send("saved")
        }).catch((error) => {
            console.error('Failed to create a new record : ', error);
            res.send("error")
        });
     
     }).catch((error) => {
        console.error('Unable to create table : ', error);
        res.send(" table error")
     });
     

}



//////--------------------------delete--------------------
const deleteFromUser = (req , res) =>
{sequelize.sync().then(() => {

    User.destroy({
        where: {
          id: req.body.id
        }
    }).then(() => {
        console.log("Successfully deleted record.")
        res.send("deleted")
    }).catch((error) => {
        console.error('Failed to delete record : ', error);
        res.send("error")
    });
  
  }).catch((error) => {
      console.error('Unable to create table : ', error);
      res.send("table error")
  });

}



const deleteFromhome = (req , res) =>
{sequelize.sync().then(() => {

    homes.destroy({
        where: {
          id: req.body.id
        }
    }).then(() => {
        console.log("Successfully deleted record.")
        res.send("deleted")
    }).catch((error) => {
        console.error('Failed to delete record : ', error);
        res.send("error")
    });
  
  }).catch((error) => {
      console.error('Unable to create table : ', error);
      res.send("table error")
  });

}


const deleteFromplot = (req , res) =>
{sequelize.sync().then(() => {

    plot.destroy({
        where: {
          id: req.body.id
        }
    }).then(() => {
        console.log("Successfully deleted record.")
        res.send("deleted")
    }).catch((error) => {
        console.error('Failed to delete record : ', error);
        res.send("error")
    });
  
  }).catch((error) => {
      console.error('Unable to create table : ', error);
      res.send("table error")
  });

}



/////////----------------------UPDATE------------------
const updateplot = (req , res) =>
{
sequelize.sync().then(() =>
{
    plot.update(
        {
            typeofplot: req.body.typeofplot,
        },
        {
            where:{ id : req.body.id},
        }
    ).then(() =>{
         console.log(" upadted data ")
         res.send("updated")
    }).catch((error) =>
    {console.error(" error update " , error);
    res.send("error");
    });
    
    }).catch((error) => {
        console.error('table not create : ', error);
        res.send("table error")
});

}


const updatehome = (req , res) =>
{
    sequelize.sync().then(() =>{
    homes.update(
        {
            price: req.body.price,
        },
        {
            where:{ id : req.body.id},
        }
    ).then(() =>{
         console.log(" upadted data ")
         res.send("updated")
    }).catch((error) =>
    {
        console.error(" error update " , error);
        res.send("error");
    });
    
    }).catch((error) => {
        console.error('cannot update : ', error);
        res.send("table error");
});

}


const updateUsers = (req , res) =>
{
    sequelize.sync().then(() =>{
    User.update(
        {
            UserID: req.body.UserID,
        },
        {
            where:{ id : 1},
        }
    ).then(() =>{
         console.log(" updated data ")
         res.send("updated")
    }).catch((error) =>
    {
        console.error(" error update " , error);
        res.send("error")
    });
    
    }).catch((error) => {
        console.error('cannot update : ', error);
        res.send("table error")
});
}

////-------------------Retrive------------------

const retriveUsers = (req , res) =>
{
sequelize.sync().then(() => {

    User.findOne({
        where: {
            id : req.body.id
        }
    }).then(rs => {
        console.log(rs)
        res.send("data get")
    }).catch((error) => {
        console.error('Failed to retrieve data : ', error);
        res.send("error")
    });

}).catch((error) => {
    console.error('Unable to create table : ', error);
    res.send("table error")
});


}

const retrivehome= (req , res) =>
{
sequelize.sync().then(() => {

    User.findOne({
        where: {
            id : req.body.id
        }
    }).then(rs => {
        console.log(rs)
        res.send("data get")
    }).catch((error) => {
        console.error('Failed to retrieve data : ', error);
        res.send("error")
    });

}).catch((error) => {
    console.error('Unable to create table : ', error);
    res.send("table error")
});

}


const retriveplot= (req , res) =>
{
    sequelize.sync().then(() => {

        User.findOne({
            where: {
                id : req.body.id
            }
        }).then(rs => {
            console.log(rs)
            res.send("data get")
        }).catch((error) => {
            console.error('Failed to retrieve data : ', error);
            res.send("error")
        });
     
     }).catch((error) => {
        console.error('Unable to create table : ', error);
        res.send("table error")
     });

}




module.exports = {addInUserTable , addInhomeTable , addInplotTable,
deleteFromhome , deleteFromplot , deleteFromUser,
updatehome , updateplot , updateUsers,
retrivehome , retriveplot , retriveUsers
}