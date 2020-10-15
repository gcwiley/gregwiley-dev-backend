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
    type: {
        type: String,
        required: true
    },
    startDate: {
        type: String,
        required: true
    },
    liveUrl: {
        type: String,
        required: true
    },
    gitUrl: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
}, {timestamps: true}
);

module.exports = mongoose.model('Project', ProjectSchema)