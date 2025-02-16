import mongoose from 'mongoose'

const roomSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    total_seats: {
        type: Number,
        default: 500,
        required: true
    }
},
    {
        timestamps: true,
        collection: 'ROOM'
    }
)

export default mongoose.model('Room', roomSchema)