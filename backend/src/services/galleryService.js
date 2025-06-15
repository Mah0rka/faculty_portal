const galleryRepository = require('../repositories/galleryRepository');

class GalleryService {
  async getAllImages() {
    return await galleryRepository.findAll();
  }
}

module.exports = new GalleryService();