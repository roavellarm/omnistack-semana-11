// const knex = require('knex')
// const configuration = require('../../knexfile')

// function config() {
//   if (process.env.NODE_ENV === 'test') return configuration.test
//   if (process.env.NODE_ENV === 'development') return configuration.development
//   if (process.env.NODE_ENV === 'production') return configuration.production
//   return null
// }

// const connection = knex(config())

// module.exports = connection

const knex = require('knex')

const knexConfig = require('../../knexfile')

const environment = process.env.DB_ENV || 'development'

module.exports = knex(knexConfig[environment])
