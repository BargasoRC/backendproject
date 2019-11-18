let models = require("./model");
let response = require("./response");

module.exports = function (docType, document, res) {
    switch (docType) {
        case 'barangay-clearance':
            let brgyClearance = new models.brgyClearance(document);
            brgyClearance
                .save()
                .then(() => {
                    response.data.body.details = document;
                    res.send(response);
                })
                .catch(err => {
                    response.error.message = err;
                    res.send(response);
                });
            break;
        case 'barangay-indigency':
            let brgyIndigency = new models.brgyIndigency(document);
            brgyIndigency
                .save()
                .then(() => {
                    response.data.body.details = document;
                    res.send(response);
                })
                .catch(err => {
                    response.error.message = err;
                    res.send(response);
                });
            break;
        case 'business-clearance':
            let clearance = new models.businessClearance(document);
            clearance
                .save()
                .then(() => {
                    response.data.body.details = document;
                    res.send(response);
                })
                .catch(err => {
                    response.error.message = err;
                    res.send(response);
                });
            break;
    }
};