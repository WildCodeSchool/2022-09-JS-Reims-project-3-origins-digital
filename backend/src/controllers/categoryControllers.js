const models = require("../models");

const getCategory = (req, res) => {
  models.category
    .findAll()
    .then(([rows]) => {
      res.send(rows);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};
const getOneCategory = (req, res) => {
  models.category
    .find(req.params.id)
    .then(([rows]) => {
      if (rows[0] == null) {
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
const editCategory = (req, res) => {
  const category = req.body;

  // TODO validations (length, format...)

  category.id = parseInt(req.params.id, 10);

  models.category
    .update(category)
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
const addCategory = (req, res) => {
  const category = req.body;

  // TODO validations (length, format...)

  models.category
    .insert(category)
    .then(([result]) => {
      res.location(`/category/${result.insertId}`).sendStatus(201);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const destroyCategory = (req, res) => {
  models.category
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

module.exports = {
  getCategory,
  getOneCategory,
  editCategory,
  addCategory,
  destroyCategory,
};
