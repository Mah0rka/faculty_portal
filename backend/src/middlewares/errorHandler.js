const errorHandler = (err, req, res, next) => {
  console.error(err.stack); // Вивід повного стека помилки в консоль для налагодження

  // Встановлюємо статус 404, якщо помилка з повідомленням 'Новина не знайдена', інакше 500
  const statusCode = err.message === 'Новина не знайдена' ? 404 : 500;

  // Відповідь клієнту з кодом статусу і повідомленням про помилку
  res.status(statusCode).json({ message: err.message || 'Щось пішло не так' });
};

module.exports = errorHandler;
