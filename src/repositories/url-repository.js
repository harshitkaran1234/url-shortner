const CrudRepository = require('./crud-repository');
const url = require('../models/collections/url'); 

class UrlRepository extends CrudRepository {
    constructor() {
        super(url);
    }
};

module.exports = UrlRepository;