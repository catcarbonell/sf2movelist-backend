module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '3eafbbc6e817f92a56d0a6a7f888f190'),
  },
});
