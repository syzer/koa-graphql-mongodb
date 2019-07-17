const { GraphQLList, GraphQLString, GraphQLInt, GraphQLFloat } = require('graphql')
const gadgetGraphQLType = require('./../types/gadgetType')
const Gadget = require('../../models/gadget')

module.exports = {
  type: new GraphQLList(gadgetGraphQLType),
  args: { priceMin: { type: GraphQLInt }, priceMax: { type: GraphQLInt }, price: { type: GraphQLFloat } },
  resolve(parent, args) {
    if (args.price) {
      return Gadget.find({ price: args.price })
    }
    return Gadget.find({
      $and: [
        { price: { $gt: args.priceMin || -Infinity } },
        { price: { $lt: args.priceMax || Infinity } }
      ]
    })
  }
}
