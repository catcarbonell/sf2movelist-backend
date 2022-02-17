module.exports = ({ env }) => ({
  url: env('MY_HEROKU_URL'),
  proxy: true,
  port: process.env.PORT,
  app: {
    keys: env.array('APP_KEYS', ['testKey1', 'testKey2']),
  },
});
