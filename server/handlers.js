const { get } = require("./db");

module.exports = {
  getByID: () => {},
  getAllData: (req, res, next) => {
    return get().then((data) => res.send(data));
  }
};
