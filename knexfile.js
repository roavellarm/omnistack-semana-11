module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: './src/database/development.sqlite',
    },
    migrations: {
      directory: './src/database/migrations',
    },
    useNullAsDefault: true,
  },

  test: {
    client: 'sqlite3',
    connection: {
      filename: './src/database/test.sqlite',
    },
    migrations: {
      directory: './src/database/migrations',
    },
    useNullAsDefault: true,
  },

  production: {
    client: 'sqlite3',
    connection: {
      filename: './dist/database/production.sqlite',
    },
    migrations: {
      directory: './dist/database/migrations',
    },
    useNullAsDefault: true,
  },

  // production: {
  //   client: 'postgresql',
  //   connection: {
  //     database: process.env.PRODUCTION_DB,
  //     user: process.env.PRODUCTION_DB_USER,
  //     password: process.env.PRODUCTION_DB_PASSWORD,
  //   },
  //   pool: {
  //     min: 2,
  //     max: 10,
  //   },
  //   migrations: {
  //     directory: './dist/database/migrations',
  //     tableName: 'knex_migrations',
  //   },
  // },
}
