// https://bixbydevelopers.com/dev/docs/sample-capsules/samples/http

var http = require('http');
var console = require('console');

const BASE = 'http://status.aws.amazon.com/json/';
const STATUS_OK = 0;
const STATUS_WARNING = 1;
const STATUS_CRITICAL = 2;
const STATUS_UNKNOWN = 3;

module.exports = {
  AWSStatus: AWSStatus,
}

function AWSStatus(region, service) {
    const formattedRegion = region.toLowerCase();
    const formattedService = service.toLowerCase();

    const options = {
      "format": "json",
    }

    var response = http.getUrl(BASE, options)
    console.log ("response = " + response)
    return response
}
