const express = require("express");
const routes = express.Router();

var store = require('./document');
var notify = require('./mail'); 

routes.route('/submit/:doctype').post((req,res)=>{
    store(req.params.doctype,req.body,res);
});

routes.route('/success/email-notification').post((req,res)=>{
    notify(req.body,res);
});

module.exports = routes