import mongoose from 'mongoose'

const roomSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    seat_capacity: {
        type: Number,
        required: true
    }
},
    {
        timestamps: true,
        collection: 'ROOM'
    }
)

export default mongoose.model('Room', roomSchema)