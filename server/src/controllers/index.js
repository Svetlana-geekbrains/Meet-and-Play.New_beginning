const meeting = require('./meeting.controller')
const meetingPoint = require('./meetingPoint.controller')
const placement = require('./placement.controller')
const category = require('./category.controller')
const auth = require('./auth.controller')

module.exports = {
    meeting,
    meetingPoint,
    placement,
    category,
    auth
}