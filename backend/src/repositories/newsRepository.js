const News = require('../models/News');

class NewsRepository {
  async findAll(limit = 10) {
    return await News.findAll({ limit, order: [['created_at', 'DESC']] });
  }

  async findById(id) {
    return await News.findByPk(id);
  }
}

module.exports = new NewsRepository();