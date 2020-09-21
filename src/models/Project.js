import mongoose from 'mongoose';

const Schema = mongoose.Schema;

// Create Schema
const ProjectSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    summary: {
        type: String,
        required: true
    }
}, {timestamps: true}
);

module.exports = mongoose.model('Project', ProjectSchema)