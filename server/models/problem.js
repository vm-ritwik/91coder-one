const mongoose = require("mongoose");

const problemSchema = new mongoose.Schema({
    id : {
        type: Number,
        required: true
    },
    title : {
        type: String,
        required: true
    },
    solved_by_count : {
        type: Number,
        default: 0
    },
    description : {
        type: String,
        default: ""
    },
    answer: {
        type: String,
        default: ""
    },
    created_at : Date,
    updated_at: Date
});

const Problem = mongoose.model('Problem', problemSchema);

module.exports = Problem;
