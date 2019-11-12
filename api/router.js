const express = require("express");
const routes = express.Router();

var store = require('./document');

routes.route('/:doctype').post((req,res)=>{
    store(req.params.doctype,req.body,res);
});

module.exports = routes