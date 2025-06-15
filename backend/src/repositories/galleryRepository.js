const Gallery = require('../models/Gallery');

class GalleryRepository {
  async findAll() {
    return await Gallery.findAll();
  }
}

module.exports = new GalleryRepository();