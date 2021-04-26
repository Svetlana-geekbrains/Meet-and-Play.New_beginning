const genericCrud = require('./generic.controller')
const { Meeting } = require('../model')

const relations = {
    getAll: {
        path: 'categories',
        select: 'title'
    },
    get: 'categories'
}

module.exports = {
    ...genericCrud(Meeting, relations)
}