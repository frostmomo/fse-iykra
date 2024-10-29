const ResponseModel = require('../models/responseModel');

const errorHandling = (err, req, res, next) => {
    console.error(err);
    const response = new ResponseModel('An unexpected error occurred', null, false);
    res.status(500).json(response);
};

module.exports = errorHandling;
