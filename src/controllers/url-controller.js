const { UrlRepository } = require('../repositories');
const { urlService } = require('../services');
const { successResponse, errorResponse } = require('../utils/common');

async function registerUrl(req, res) {
    try{
        const url = await urlService.registerUrl(req.body.url);
        successResponse.data = url;
        return res.status(200).json(successResponse)
    } catch(error) {
        console.log(error);
        return res.status(500).json(errorResponse);
    }
}

async function getUrl(req, res) {
    try {
        const originalUrl = await urlService.getUrl(req.query.hash);
        res.redirect(originalUrl);
    } catch(error) {
        console.log(error);
        return res.status(500).json(errorResponse);
    }
}

module.exports = {
    registerUrl,
    getUrl,
};