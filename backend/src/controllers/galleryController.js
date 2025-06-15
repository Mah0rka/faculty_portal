const galleryService = require('../services/galleryService');

class GalleryController {
  async getAllImages(req, res, next) {
    try {
      const images = await galleryService.getAllImages();
      res.status(200).json(images);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new GalleryController();