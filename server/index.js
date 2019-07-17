const Koa = require('koa')
const mount = require('koa-mount')
const graphqlHTTP = require('koa-graphql')
const schema = require('../graphql/schema')

const initDB = require('../models/database')
initDB()

const app = new Koa()
app.listen(9000)

app.use(mount('/graphql', graphqlHTTP({
  schema: schema,
  graphiql: true
})))

app.on('error', err => {
  console.error('Server error', err)
})


