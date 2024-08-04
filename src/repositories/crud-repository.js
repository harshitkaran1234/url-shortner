const AppError = require('../utils/errors/app-error');
const  { logger } = require('../config');

class CrudRepository{
    constructor(model){
        this.model = model;
    }

    async create(data) {
        const user = new this.model(data);
        await user.save();
        return user;
    }

    async destroy(id) {
        return User.findByIdAndDelete(id);
    }

    async get(id) {
        return this.model.findById(id);
    }

    async getAll() {
        return this.model.find({});
    }

    async update(id, data) {
        const user = await this.model.findByIdAndUpdate(id, data, { new: true });    
        return user;
    }

    async getByHash(hash) {
        return this.model.find({shortenedUrl: hash});
    }
}

module.exports = CrudRepository;