module.exports = ({ env }) => ({
  url: env('MY_HEROKU_URL'),
  app: {
    keys: env.array("APP_KEYS", ["testKey1", "testKey2"]),
  },
});
