const { GraphQLList } =  require('graphql')
const gadgetGraphQLType = require('./../types/gadgetType')
const Gadget = require('../../models/gadget')

module.exports = {
  type: new GraphQLList(gadgetGraphQLType),
  args: gadgetGraphQLType.getFields(),
  resolve(parent, args = {}) {
    return Gadget.find(args)
  }
}
