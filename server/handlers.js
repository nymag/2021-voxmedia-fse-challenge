const { get } = require("./db");

module.exports = {
  // takes uid and returns old/new
  getByID: async (req, res) => {
    const allData = await get();

    return res.json(allData);
  },
  getAllData: (req, res, next) => {
    return get().then((data) => res.send(data));
  },
};
