const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
  constructor() {
    super({ table: "user" });
  }

  insert(user) {
    return this.connection.query(
      `insert into ${this.table} (firstname, lastname, username, email, hashedPassword) values (?, ?, ?, ?, ?)`,
      [
        user.firstname,
        user.lastname,
        user.username,
        user.email,
        user.hashedPassword,
      ]
    );
  }

  findAll() {
    return this.connection.query(
      `select id, firstname, lastname, username, email from  ${this.table}`
    );
  }

  find(id) {
    return this.connection.query(
      `select firstname, lastname, username, email from  ${this.table} where id = ?`,
      [id]
    );
  }

  update(user) {
    return this.connection.query(
      `update ${this.table} set firstname = ?, lastname = ?, username = ?, email = ?, hashedPassword = ? where id = ?`,
      [
        user.firstname,
        user.lastname,
        user.username,
        user.email,
        user.hashedPassword,
        user.id,
      ]
    );
  }
}

module.exports = UserManager;
