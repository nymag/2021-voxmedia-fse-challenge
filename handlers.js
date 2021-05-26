const { get } = require("./db");

module.exports = {
  // implement me
  getMigratedUrl: () => {
    return "newtube.com/1";
  },
  // implement me
  getOriginalUrl: () => {
    return "oldtube.com/1";
  },
  // implement me
  getAllMigratedEpisodeTitles: () => {
    return ["title", "title1"];
  },
  getAllData: (req, res, next) => {
    return get().then((data) => res.send(data));
  },
};
