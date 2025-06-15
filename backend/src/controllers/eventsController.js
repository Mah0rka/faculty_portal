const eventsService = require('../services/eventsService');

class EventsController {
    async getAllEvents(req, res, next) {
        try {
            const events = await eventsService.getAllEvents();
            res.status(200).json(events);
        } catch (error) {
            next(error);
        }
    }
    async getEventById(req, res, next) {
        try {
            const event = await eventsService.getEventById(req.params.id);
            res.status(200).json(event);
        } catch (error) {
            next(error);
        }
    }
}

module.exports = new EventsController();
