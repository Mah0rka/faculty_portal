const express = require('express');
const router = express.Router();
const eventsController = require('../controllers/eventsController');
const { validateId } = require('../middlewares/validate');

router.get('/', eventsController.getAllEvents);
router.get('/:id', validateId, eventsController.getEventById);

module.exports = router;