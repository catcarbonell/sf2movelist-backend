module.exports = ({ env }) => ({
  url: env('MY_HEROKU_URL'),
  port: process.env.PORT,
  app: {
    keys: env.array("APP_KEYS", ["Tax+iYqIPK31eLXMpIWtQw==", "IboCMf6x00tPcQARDpZ7Dg==", "dNy8PT4nYfbM5bEzUAvcvg==", "Gdnk+WA49iOkKP7/DfaoBw=="]),
  },
});
