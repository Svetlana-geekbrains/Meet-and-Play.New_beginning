const { model } = require('mongoose')
const User = require('./User')
const Placement = require('./Placement')
const MeetingPoint = require('./MeetingPoint')
const Meeting = require('./Meeting')
const Category = require('./Category')
const Token = require('./Token')

module.exports = {
    User,
    Placement,
    MeetingPoint,
    Meeting,
    Category,
    Token
};