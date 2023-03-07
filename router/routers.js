const express = require("express")
const router=express.Router();
 const { house,rent,plot,contact,home,about} = require
("../controllers/fun");


router.get("/home",(req, res) =>home(req,res));

router.get("/rent",(req, res) =>rent(req,res));
router.get("/house",(req, res) =>house(req,res));
router.get("/plot",(req, res) =>plot(req,res));
router.get("/about",(req, res) =>about(req,res));

router.get("/contactus",(req, res) =>contactus(req,res));

 module.exports = router
