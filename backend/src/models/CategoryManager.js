const AbstractManager = require("./AbstractManager");

class CategoryManager extends AbstractManager {
  constructor() {
    super({ table: "category" });
  }

  insert(category) {
    return this.connection.query(
      `insert into ${this.table} category_name values ?`,
      [category.category_name]
    );
  }

  update(category) {
    return this.connection.query(
      `update ${this.table} set category_name = ? where id = ?`,
      [category.category_name]
    );
  }
}

module.exports = CategoryManager;
