const AbstractManager = require("./AbstractManager");

class VideoManager extends AbstractManager {
  constructor() {
    super({ table: "video" });
  }

  insert(video) {
    return this.connection.query(
      `insert into ${this.table} (title, description_video, publication_date, link, thumbnail, category_id) values (?, ?, ?, ?, ?, ?)`,
      [
        video.title,
        video.description_video,
        video.publication_date,
        video.link,
        video.thumbnail,
        video.category_id,
      ]
    );
  }

  update(video) {
    return this.connection.query(
      `update ${this.table} set title = ?, description_video = ?, link = ?, thumbnail = ?, category_id = ? where id = ?`,
      [
        video.title,
        video.description_video,
        video.link,
        video.thumbnail,
        video.category_id,
        video.id,
      ]
    );
  }
}

module.exports = VideoManager;
