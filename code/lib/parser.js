var tmdb = require('./AWSStatus.js')

module.exports = {
  parseStatus: parseStatus,
}

function parseCurrentStatus(StatusResponse) {
  if (StatusResponse) {
    return {
      current: StatusResponse.current,
    }
  }
}