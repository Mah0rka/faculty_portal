const Events = require('../models/Events');

class EventsRepository {
    async findAll(limit = 10) {
        return await Events.findAll({ limit, order: [['created_at', 'DESC']] });
    }

    async findById(id) {
        return await Events.findByPk(id);
    }
}

module.exports = new EventsRepository();