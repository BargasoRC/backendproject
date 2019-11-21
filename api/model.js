const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let brgyClearanceSchema = new Schema({
    name: {
        firstName: {type:String,required:true},
        lastName: {type:String,required:true},
        middleName: {type:String,required:false},
        suffix: {type:String,required:false}
    },
    age: {type:Number,required:true},
    sex: {type:String,required:true},
    citizenship: {type:String,required:true},
    civilStatus: {type:String,required:true},
    address: {
        sitio:{type:String,required:true},
        barangay:{type:String,required:true},
        municipality:{type:String,required:true},
        province:{type:String,required:true}
    },
    accessCode: {type:String,required:true,unique:true}
}, {
    collection: "barangay_clearance"
});

let brgyIndigencySchema = new Schema({
    name: {
        firstName: {type:String,required:true},
        lastName: {type:String,required:true},
        middleName: {type:String,required:false},
        suffix: {type:String,required:false}
    },
    age: {type:Number,required:true},
    sex: {type:String,required:true},
    address: {
        sitio:{type:String,required:true},
        barangay:{type:String,required:true},
        municipality:{type:String,required:true},
        province:{type:String,required:true}
    },
    accessCode: {type:String,required:true,unique:true}
}, {
    collection: "barangay_indigency"
});

let businessClearanceSchema = new Schema({
    name: {
        firstName: {type:String,required:true},
        lastName: {type:String,required:true},
        middleName: {type:String,required:false},
        suffix: {type:String,required:false}
    },
    businessType: {type:String,required:true},
    dateStarted: {type:String,required:true},
    address: {
        sitio:{type:String,required:true},
        barangay:{type:String,required:true},
        municipality:{type:String,required:true},
        province:{type:String,required:true}
    },
    accessCode: {type:String,required:true,unique:true}
}, {
    collection: "business_clearance"
});

const brgyClearance = mongoose.model("brgyClearance", brgyClearanceSchema);
const brgyIndigency = mongoose.model("brgyIndigency", brgyIndigencySchema);
const businessClearance = mongoose.model("businessClearance", businessClearanceSchema);
module.exports = { brgyClearance, brgyIndigency, businessClearance };