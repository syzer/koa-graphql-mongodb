const { GraphQLObjectType } =  require('graphql')

const queryAllGadgets = require('./queryAllGadgets')
const queryGadgetById = require('./queryGadgetById')
const queryByPriceRange = require('./queryGadgetByPriceRange')

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    queryGadgetById,
    queryAllGadgets,
    queryByPriceRange,
  }
})

module.exports = RootQuery

