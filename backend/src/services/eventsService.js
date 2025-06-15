const eventsRepository = require('../repositories/eventsRepository');

class EventsService {
    async getAllEvents(limit = 10) {
        return await eventsRepository.findAll(limit);
    }

    async getEventById(id) {
        const event = await eventsRepository.findById(id);
        if (!event) throw new Error('Подія не знайдена');
        return event;
    }
}

module.exports = new EventsService();