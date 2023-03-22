const express = require('express')
const router = express.Router()

const fuction = require('../controllers/crud.controllers')


router.post('/adduser' , fuction.addInUserTable)
router.get('/addhome' , fuction.addInhomeTable)
router.get('/addplot' , fuction.addInplotTable)
router.get('/deleteuser' , fuction.deleteFromUser)
router.get('/deletehome' , fuction.deleteFromhome)
router.get('/deleteplot' , fuction.deleteFromplot)
router.get('/retriveuser' , fuction.retriveUsers)
router.get('/retrivehome' , fuction.retrivehome)
router.get('/retriveplot' , fuction.retriveplot)
router.get('/updateuser', fuction.updateUsers)
router.get('/updatehome', fuction.updatehome)
router.get('/updateplot', fuction.updateplot)



module.exports = router