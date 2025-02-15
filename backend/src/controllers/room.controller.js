import mongoose from 'mongoose'
import Room from '../models/room.model.js'

export const getRoom = async (req, res) => {
    try {
        const room = await Room.find({})
        if (room.length === 0) {
            return res.status(404).json({ success: false, message: 'Room not found' })
        }
        res.status(200).json({ success: true, data: room })
    } catch (error) {
        console.error(error)
        res.status(404).json({ success: false, message: 'Server Error' })
    }
}

export const createRoom = async (req, res) => {
    const { name, seat_capacity } = req.body

    if (!name || !seat_capacity) {
        return res.status(400).json({ success: false, message: 'Create room failed' })
    }

    try {
        const room = await Room.create(req.body)
        res.status(201).json({ success: true, data: room })
    } catch (error) {
        console.error(error)
        res.status(500).json({ success: false, message: 'Internal Server Error' })
    }
}

export const updateRoom = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ success: false, message: 'Invalid Room ID' })
    }

    try {
        const room = await Room.findByIdAndUpdate(id, req.body, { new: true })
        res.status(200).json({ success: true, data: room })
    } catch (error) {
        console.error(error)
        res.status(404).json({ success: false, message: 'Server Error' })
    }
}

export const deleteRoom = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ success: false, message: 'Invalid Room ID' })
    }

    try {
        await Room.findByIdAndDelete(id)
        res.status(200).json({ success: true, message: 'Room deleted successfully' })
    } catch (error) {
        console.error(error)
        res.status(404).json({ success: false, message: 'Server Error' })
    }
}