const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
  constructor() {
    super({ table: "user" });
  }

  insert(user) {
    return this.connection.query(
      `insert into ${this.table} (firstname, lastname, username, email, password) values (?, ?, ?, ?, ?)`,
      [user.firstname, user.lastname, user.username, user.email, user.password]
    );
  }

  update(user) {
    return this.connection.query(
      `update ${this.table} set firstname = ?, lastname = ?, username = ?, email = ?, password = ? where id = ?`,
      [
        user.firstname,
        user.lastname,
        user.username,
        user.email,
        user.password,
        user.id,
      ]
    );
  }
}

module.exports = UserManager;
