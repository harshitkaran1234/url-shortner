const crypto = require('crypto');
const AppError = require('../utils/errors/app-error');
const { UrlRepository } = require('../repositories');

const urlRepo = new UrlRepository();

async function registerUrl(inputUrl){
    try {
        const hash = crypto.createHash('sha256').update(inputUrl).digest('base64url').slice(0, 6);
        const createdUrl = await urlRepo.create({
            originalUrl: inputUrl,
            shortenedUrl: `${hash}.com`,
        });
        return createdUrl;
    } catch(error) {
        console.log(error);
        throw new AppError('Cannot create data', 500);
    }
}

async function getUrl(hashUrl) {
    try {
        const url = await urlRepo.getByHash(hashUrl);
        return url[0].originalUrl;
    } catch(error) {
        console.log(error);
        throw new AppError('Cannot find data', 500);
    }
}

module.exports = {
    registerUrl,
    getUrl,
}