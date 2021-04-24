const genericCrud = require('./generic.controller')
const { Category } = require('../model')

const relations = {
    getAll: 'meetings',
    get: 'meetings'
}


module.exports = {
    ...genericCrud(Category, relations)
}