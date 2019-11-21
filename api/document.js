let models = require("./model");
let response = null
let errorResponse = require("./setErrorResponse");
let successResponse = require("./setSuccessResponse");


const store = (docType, document, res) => {
    switch (docType) {
        case 'barangay-clearance':
            document["accessCode"] = "BAC_" + code();
            let brgyClearance = new models.brgyClearance(document);
            brgyClearance
                .save()
                .then((result) => {
                    response = successResponse(201, { "access_code": result.accessCode }, "Document has been sent");
                    res.send(response);
                })
                .catch(err => {
                    if (err.code === 11000) {
                        store(docType, document, res)
                    } else {
                        response = errorResponse(503, err, "Service Unavailable");
                        res.send(response);
                    }
                });
            break;
        case 'barangay-indigency':
            document["accessCode"] = "BAI_"+code();
            let brgyIndigency = new models.brgyIndigency(document);
            brgyIndigency
                .save()
                .then((result) => {
                    response = successResponse(201, { "access_code": result.accessCode }, "Document has been sent")
                    res.send(response);
                })
                .catch(err => {
                    if (err.code === 11000) {
                        store(docType, document, res)
                    } else {
                        response = errorResponse(503, err, "Service Unavailable");
                        res.send(response);
                    }
                });
            break;
        case 'business-clearance':
            document["accessCode"] = "BUC_"+code();
            let clearance = new models.businessClearance(document);
            clearance
                .save()
                .then((result) => {
                    response = successResponse(201, { "access_code": result.accessCode }, "Document has been sent")
                    res.send(response);
                })
                .catch(err => {
                    if (err.code === 11000) {
                        store(docType, document, res)
                    } else {
                        response = errorResponse(503, err, "Service Unavailable");
                        res.send(response);
                    }
                });
            break;
    }
};

code = () => {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < 6; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

module.exports = store;