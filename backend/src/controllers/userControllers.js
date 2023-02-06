const models = require("../models");

const getUsers = (req, res) => {
  models.user
    .findAll()
    .then(([rows]) => {
      res.send(rows);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};
const getOneUser = (req, res) => {
  models.user
    .find(req.params.id)
    .then(([rows]) => {
      if (rows[0] == null && req.params.id === req.payload.sub) {
        res.sendStatus(404);
      } else {
        res.send(rows[0]);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const editUser = (req, res) => {
  const user = req.body;

  // TODO validations (length, format...)

  user.id = parseInt(req.params.id, 10);
  models.user
    .update(user)
    .then(([result]) => {
      if (result.affectedRows === 0 && req.params.id === req.payload.sub) {
        res.sendStatus(404);
      } else {
        res.sendStatus(204);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};
const editUserRole = (req, res) => {
  const user = req.body;

  // TODO validations (length, format...)

  user.id = parseInt(req.params.id, 10);
  models.user
    .updateRole(user)
    .then(([result]) => {
      if (result.affectedRows === 0 && req.params.id === req.payload.sub) {
        res.sendStatus(404);
      } else {
        res.sendStatus(204);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};
const addUser = (req, res) => {
  const user = req.body;

  // TODO validations (length, format...)

  models.user
    .insert(user)
    .then(([result]) => {
      res.location(`/users/${result.insertId}`).sendStatus(201);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const destroyUser = (req, res) => {
  models.user
    .delete(req.params.id)
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.sendStatus(404);
      } else {
        res.sendStatus(204);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const getUserByEmailWithPasswordAndPassToNext = (req, res, next) => {
  models.user
    .getUserByEmail(req.body)
    .then(([user]) => {
      if (user[0] != null) {
        [req.user] = user;

        next();
      } else {
        res.sendStatus(401);
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error retrieving data from database");
    });
};

module.exports = {
  getUsers,
  getOneUser,
  editUser,
  addUser,
  destroyUser,
  getUserByEmailWithPasswordAndPassToNext,
  editUserRole,
};
