const data = {
  original_items: [
    {
      title: "Episode 1",
      id: "CAW1",
      unique_slug: "D473",
      url: "oldtube.com/1",
    },
    {
      title: "Episode 2",
      id: "123A",
      unique_slug: "0301",
      url: "oldtube.com/2",
    },
    {
      title: "Episode 3",
      id: "LKI4",
      unique_slug: "B6C5",
      url: "oldtube.com/3",
    },
    {
      title: "Episode 4 Not Migrated",
      id: "HJHS",
      unique_slug: "OIUX",
      url: "oldtube.com/4",
    },
  ],
  migrated_items: [
    {
      title: "Episode 1",
      id: 2341,
      unique_slug: "D473",
      url: "newtube.com/1",
    },
    {
      title: "Episode 2",
      id: 1231,
      unique_slug: "0301",
      url: "newtube.com/2",
    },
    {
      title: "Episode 3",
      id: 2341,
      unique_slug: "B6C5",
      url: "newtube.com/3",
    },
  ],
};

module.exports = {
  get: () => new Promise((resolve) => resolve(data)),
};