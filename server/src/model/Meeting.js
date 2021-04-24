const { model, Schema, Schema: {
    Types: { ObjectId },
},
} = require('mongoose')

const schema = new Schema({
    image: {
        type: String,
        default: '',
    },
    title: {
        type: String,
        default: '',
    },
    city: {
        type: String,
        default: '',
    },
    address: {
        type: String,
        default: '',
    },     
    sportType: {
        type: String,
        default: '',
    },     
    count: {
        type: Number,
        default: 0,
    },
    date: {
        type: String,
        default: '',
    },
    time: {
        type: String,
        default: '',
    },
    user: {
        type: ObjectId,
        ref: "User",
    },
    categories: {
        type: ObjectId,
        ref: "Category",
    },
})

module.exports = model('Meeting', schema)