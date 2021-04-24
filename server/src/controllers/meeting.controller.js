const genericCrud = require('./generic.controller')
const { Meeting } = require('../model')

const relations = {
    getAll: 'categories',
    get: 'categories'
}

module.exports = {
    ...genericCrud(Meeting, relations)
}