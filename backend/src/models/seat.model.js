import mongoose, { Types } from 'mongoose'

const seatSchema = new mongoose.Schema({

    seat_number: {
        type: Number,
    },
    status: {
        type: String,
        enum: ['available', 'booked', 'broken'],
        default: 'available',
        required: true
    },
    room: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ROOM',
        required: true
    }
})

export default mongoose.model('Seat', seatSchema)