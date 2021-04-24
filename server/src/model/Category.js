const { model, Schema, Schema: {
    Types: { ObjectId },
},
} = require('mongoose')

const schema = new Schema({
    title: {
        type: String,
        default: '',
    },
    meetings: {
        type: ObjectId,
        ref: "Meeting",
    },
})

module.exports = model('Category', schema)