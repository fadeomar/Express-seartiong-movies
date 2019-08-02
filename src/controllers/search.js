const request = require('request');

exports.search = (req, res, next) => {
    request('url', (error, resp, body) => {
        if( error ){
            next(error);
        } else {
            res.send(JSON.parse(body))
        }
    });
};
