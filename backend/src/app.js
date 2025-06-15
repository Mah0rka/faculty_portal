const express = require('express');
const cors = require('cors');
const helmet = require('helmet'); // Helmet імпортується, але не використовується в middleware (можна додати)
const sequelize = require('./config/database');
const newsRoutes = require('./routes/newsRoutes');
const galleryRoutes = require('./routes/galleryRoutes');
const eventsRoutes = require('./routes/eventsRoutes');
const errorHandler = require('./middlewares/errorHandler');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('uploads')); // Статичне розміщення папки uploads для доступу до зображень

// Routes
app.use('/api/news', newsRoutes);
app.use('/api/gallery', galleryRoutes);
app.use('/api/events', eventsRoutes);

// Error handling middleware 
app.use(errorHandler);

// Database initialization
sequelize.sync({ force: false }).then(async () => {
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});

module.exports = app;