const AbstractManager = require("./AbstractManager");

class VideoManager extends AbstractManager {
  constructor() {
    super({ table: "video" });
  }

  insert(video) {
    return this.connection.query(
      `insert into ${this.table} (title, description_video, publication_date, thumbnail) values (?, ?, ?, ?)`,
      [
        video.title,
        video.description_video,
        video.publication_date,
        video.thumbnail,
      ]
    );
  }

  update(video) {
    return this.connection.query(
      `update ${this.table} set title = ?, description_video = ?, publication_date = ?, thumbnail = ? where id = ?`,
      [
        video.title,
        video.description_video,
        video.publication_date,
        video.thumbnail,
        video.id,
      ]
    );
  }
}

module.exports = VideoManager;
