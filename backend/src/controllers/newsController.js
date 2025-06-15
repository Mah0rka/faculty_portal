const newsService = require('../services/newsService');

class NewsController {
  async getAllNews(req, res, next) {
    try {
      const news = await newsService.getAllNews();
      res.status(200).json(news);
    } catch (error) {
      next(error);
    }
  }

  async getNewsById(req, res, next) {
    try {
      const news = await newsService.getNewsById(req.params.id);
      res.status(200).json(news);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new NewsController();