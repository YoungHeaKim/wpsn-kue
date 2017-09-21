const knex = require('./knex')

module.exports = {
  getCompleteImageEntries() {
    return knex('image_entry')
      // 최초로 올린 것은 thumbnail_url에 오게 만든다.
      .whereNotNull('thumbnail_url')
      // 제일 최신에 만들어진 것이 맨위로 오게 만든다.
      .orderBy('id', 'desc')
  },
  createImageEntry({original_url, thumbnail_url, title, description}) {
    return knex('image_entry')
      .insert({
        original_url,
        thumbnail_url,
        title,
        description
      })
  },
  getImageEntryById(id) {
    return knex('image_entry')
      .where({id})
      .first()
  },
  updateThumbnailUrlByid(id, thumbnail_url) {
    return knex('image_entry')
      .where({id})
      .update({thumbnail_url})
  }
}
