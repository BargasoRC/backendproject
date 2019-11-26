const express = require("express");
const routes = express.Router();

var store = require('./document');
var notify = require('./mail'); 

routes.route('/:doctype').post((req,res)=>{
    store(req.params.doctype,req.body,res);
});

routes.route('/email-notification').post((req,res)=>{
    notify(req.body,res);
});

module.exports = routes