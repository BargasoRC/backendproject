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
            models.brgyIndigency.insertOne(document, (err, result) => {
                console.log(result)
            }).catch(err => {
                if (err) {
                    console.log(err);
                    res.status(503).json({
                        message: "Service unavailable"
                    });
                }
            });
            break;
        case 'business-clearance':
            models.businessClearance.insertOne(document, (err, result) => {
                console.log(result)
            }).catch(err => {
                if (err) {
                    console.log(err);
                    res.status(503).json({
                        message: "Service unavailable"
                    });
                }
            });
            break;
    }
};