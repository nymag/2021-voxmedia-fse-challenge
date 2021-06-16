const data = [
  {
    title: "Episode 1",
    id: "CAW1",
    views: 702,
    url: "oldtube.com/1",
    provider: "oldtube"
  },
  null,
  {
    title: "Episode 2",
    id: "123A",
    views: 23048,
    url: "oldtube.com/2",
    provider: "oldtube"
  },
  {
    title: "Episode 3",
    id: "LKI4",
    views: 9723,
    url: "oldtube.com/3",
    provider: "oldtube"
  },
  {
    title: "Episode 4 Not Migrated",
    id: "HJHS",
    views: 1280,
    url: "oldtube.com/4",
    provider: "oldtube"
  },
  {
    title: "Episode 5 Not Migrated",
    id: "AVUN",
    views: 2696,
    url: "oldtube.com/5",
    provider: "oldtube"
  },
  {
    title: "Episode 1",
    id: "D473",
    views: 2349,
    url: "newtube.com/1",
    provider: "newtube"
  },
  {
    title: "Episode 2",
    id: "0301",
    views: 34987,
    url: "newtube.com/2",
    provider: "newtube"
  },
  {
    title: "Episode 3",
    id: "B6C5",
    views: 2348,
    url: "newtube.com/3",
    provider: "newtube"
  },
  {
    title: "Guinea pig bridge",
    id: "bq9ghmgqoyc",
    url: "https://www.youtube.com/watch?v=bq9ghmgqoyc",
    views: 500003023,
    provider: "youtube"
  }
];

module.exports = {
  get: () => new Promise((resolve) => resolve(data))
};
