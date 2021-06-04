const { get } = require("./db");

// challenge: add memoization (to simulate db caching),
// and consider any refactoring to improve testability
// and separation of concerns


module.exports = {
  // takes uid and returns old/new
  getByID: async (req, res) => {
    const allData = await get();

    // filter and get the one with the ID (which one?)
    const item = allData.find(
      (item) => item && item.unique_slug === req.params.id
    );

    // if it's not there -- error!
    if (!item) {
      res.status("404").send("NO ITEM SORRY");
    }

    // return the item
    return res.json([item]);
  },
  getAllData: (req, res, next) => {
    return get().then((data) => res.send(data));
  },
};
