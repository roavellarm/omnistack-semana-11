const dotenv = require('dotenv')

dotenv.config()

const app = require('./app')

const { PORT } = process.env

app.listen(PORT)

// eslint-disable-next-line no-console
console.log(`App running in port ${PORT}`)
