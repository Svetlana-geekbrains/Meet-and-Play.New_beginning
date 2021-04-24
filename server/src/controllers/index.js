const user = require('./user.controller')
const meeting = require('./meeting.controller')
const meetingPoint = require('./meetingPoint.controller')
const placement = require('./placement.controller')
const category = require('./category.controller')

module.exports = {
    user,
    meeting,
    meetingPoint,
    placement,
    category
}