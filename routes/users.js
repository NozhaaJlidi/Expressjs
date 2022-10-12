const express = require('express');
const router= express.Router();

router.get('/',(req, res) => {
const date=new Date();
const hours=date.getHours();
const day=date.getDay();
if (hours>9 && hours<17 && day>0 && day<6){
    res.render("opened");

}
else {
    res.render("closed");

}
})


















router.get('/home',(req, res) => {
    res.render("home")
})

router.get('/Services',(req, res) => {
    res.render("Services")
})
router.get('/contact',(req, res) => {
    res.render("contact")
})
module.exports = router;