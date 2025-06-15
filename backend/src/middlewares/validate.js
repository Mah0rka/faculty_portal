const { param, validationResult } = require('express-validator');

// Масив middleware для перевірки параметра 'id' у маршруті
const validateId = [
  // Перевірка, що параметр 'id' є цілим числом
  param('id').isInt().withMessage('ID повинен бути числом'),

  // Обробник результатів валідації
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) 
      // Якщо є помилки — повертаємо 400 з деталями помилок
      return res.status(400).json({ errors: errors.array() });
    next(); // Інакше — продовжуємо обробку запиту
  },
];

module.exports = { validateId };
