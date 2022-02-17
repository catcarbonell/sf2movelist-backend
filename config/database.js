const path = require('path');
const parse = require('pg-connection-string').parse;
 
 module.exports = ({ env }) => {
  if(env('NODE_ENV') === 'production') {
    const config = parse(process.env.DATABASE_URL)
    return {
      connection: {
        default: {
          connector: 'bookshelf',
          settings: {
            client: 'postgres',
            host: config.host,
            port: config.port,
            database: config.database,
            username: config.user,
            password: config.password,
            ssl: {
              rejectUnauthorized: false, // For self-signed certificates
            },  
          },
          debug: false,
        }
      }
    }
  }
  return {
    connection: {
      client: 'sqlite',
      connection: {
        filename: path.join(__dirname, '..', env('DATABASE_FILENAME', '.tmp/data.db')),
      },
      useNullAsDefault: true,
    }
  }
};
