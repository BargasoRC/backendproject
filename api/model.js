const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let brgyClearanceSchema = new Schema({
    name: {
        firstName: String,
        lastName: String,
        middleName: String,
        suffix: String
    },
    age: Number,
    sex: String,
    citizenship: String,
    civilStatus: String,
    address: {
        sitio:String,
        barangay:String,
        municipality:String,
        province:String
    },
    accessCode: String
}, {
    collection: "barangay_clearance"
});

let brgyIndigencySchema = new Schema({
    name: {
        firstName: String,
        lastName: String,
        middleName: String,
        suffix: String
    },
    age: Number,
    sex: String,
    address: {
        streetNo: String,
        street: String,
        city: String,
        country: String,
        zip: String
    },
    accessCode: String
}, {
    collection: "barangay_indigency"
});

let businessClearanceSchema = new Schema({
    name: {
        firstName: String,
        lastName: String,
        middleName: String,
        suffix: String
    },
    businessType: String,
    dateStarted: String,
    address: {
        streetNo: String,
        street: String,
        city: String,
        country: String,
        zip: String
    },
    accessCode: String
}, {
    collection: "business_clearance"
});

const brgyClearance = mongoose.model("brgyClearance", brgyClearanceSchema);
const brgyIndigency = mongoose.model("brgyIndigency", brgyIndigencySchema);
const businessClearance = mongoose.model("businessClearance", businessClearanceSchema);
module.exports = { brgyClearance, brgyIndigency, businessClearance };