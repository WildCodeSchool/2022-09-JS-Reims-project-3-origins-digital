const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
  constructor() {
    super({ table: "user" });
  }

  insert(user) {
    return this.connection.query(
      `insert into ${this.table} (firstname, lastname, username, email, hashedPassword, role_id) values (?, ?, ?, ?, ?, ?)`,
      [
        user.firstname,
        user.lastname,
        user.username,
        user.email,
        user.hashedPassword,
        user.role_id,
      ]
    );
  }

  getUserByEmail(user) {
    return this.connection.query("select * from user where email = ?", [
      user.email,
    ]);
  }

  findAll() {
    return this.connection.query(
      `select id, firstname, lastname, username, email, role_id from  ${this.table}`
    );
  }

  find(id) {
    return this.connection.query(
      `select firstname, lastname, username, email, role_id from  ${this.table} where id = ?`,
      [id]
    );
  }

  update(user) {
    return this.connection.query(
      `update ${this.table} set firstname = ?, lastname = ?, username = ?, email = ?, hashedPassword = ?, role_id=? where id = ?`,
      [
        user.firstname,
        user.lastname,
        user.username,
        user.email,
        user.hashedPassword,
        user.role_id,
        user.id,
      ]
    );
  }
}

module.exports = UserManager;
