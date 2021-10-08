var console = require('console')
var cloud = require('./lib/AWSStatus.js')
var parser = require('./lib/parser.js')

module.exports.function = function fetchCurrentStatus(region, service) {
  const response = cloud.AWSStatus(region, service)
  const current = parser.parseCredits(response)
  console.info("CURRENT STATUS", current)
  return current
}
