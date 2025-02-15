import mongoose from 'mongoose'

const movieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    director: {
        type: String,
        required: true
    },
    cast: {
        type: String,
        required: true
    },
    genre: {
        type: String,
        required: true
    },
    duration: {
        type: String,
        required: true
    },
    release_date: {
        type: Date,
        required: true
    },
    rating: {
        type: Number,
        min: 0,
        max: 10,
        required: true
    },
},
    {
        timestamps: true,
        collection: 'MOVIE'
    })

export default mongoose.model('Movie', movieSchema)