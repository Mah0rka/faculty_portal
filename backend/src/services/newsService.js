const newsRepository = require('../repositories/newsRepository');

class NewsService {
  async getAllNews(limit = 10) {
    return await newsRepository.findAll(limit);
  }

  async getNewsById(id) {
    const news = await newsRepository.findById(id);
    if (!news) throw new Error('Новина не знайдена');
    return news;
  }
}

module.exports = new NewsService();