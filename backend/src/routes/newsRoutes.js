const express = require('express');
const router = express.Router();
const newsController = require('../controllers/newsController');
const { validateId } = require('../middlewares/validate');

router.get('/', newsController.getAllNews);
router.get('/:id', validateId, newsController.getNewsById);

module.exports = router;