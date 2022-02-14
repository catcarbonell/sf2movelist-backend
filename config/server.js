module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', '1337'),
  app: {
    keys: env.array('APP_KEYS', ['Tax+iYqIPK31eLXMpIWtQw==', 'IboCMf6x00tPcQARDpZ7Dg==']),
  },
});
