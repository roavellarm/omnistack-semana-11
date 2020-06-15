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

  staging: {
    client: 'postgresql',
    connection: {
      database: process.env.STAGING_DB,
      user: process.env.STAGING_DB_USER,
      password: process.env.STAGING_DB_PASSWORD,
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations',
    },
  },

  production: {
    client: 'postgresql',
    connection: {
      database: process.env.PRODUCTION_DB,
      user: process.env.PRODUCTION_DB_USER,
      password: process.env.PRODUCTION_DB_PASSWORD,
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      // directory: `${__dirname}/dist/database/migrations`,
      tableName: 'knex_migrations',
    },
  },

  // production: {
  //   client: 'postgresql',
  //   connection: process.env.DATABASE_URL,
  //   searchPath: ['public'],
  //   migrations: {
  //     tableName: 'knex_migrations',
  //   },
  // },
}
