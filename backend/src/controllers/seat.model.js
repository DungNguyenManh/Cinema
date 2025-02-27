import mongoose from 'mongoose'

export const getSeat = async (req, res) => {
    try {
        const seat = await Seat.find({})
        if (seat.length === 0) {
            return res.status(404).json({ success: false, message: 'Seat not found' })
        }
        res.status(200).json({ success: true, data: seat })
    } catch (error) {
        console.error(error)
        res.status(404).json({ success: false, message: 'Server Error' })
    }
}

export const createSeat = async (req, res) => {
    const { seat_number, status, room } = req.body

    if (!seat_number || !status || !room) {
        return res.status(400).json({ success: false, message: 'Create seat failed' })
    }

    try {
        const seat = await Seat.create(req.body)
        res.status(201).json({ success: true, data: seat })
    } catch (error) {
        console.error(error)
        res.status(500).json({ success: false, message: 'Internal Server Error' })
    }
}

export const updateSeat = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ success: false, message: 'Invalid Seat ID' })
    }

    try {
        const seat = await Seat.findByIdAndUpdate(id, req.body, { new: true })
        res.status(200).json({ success: true, data: seat })
    } catch (error) {
        console.error(error)
        res.status(404).json({ success: false, message: 'Server Error' })
    }
}

export const deleteSeat = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ success: false, message: 'Invalid Seat ID' })
    }

    try {
        await Seat.findByIdAndDelete(id)
        res.status(200).json({ success: true, message: 'Seat deleted successfully' })
    } catch (error) {
        console.error(error)
        res.status(404).json({ success: false, message: 'Server Error' })
    }
}
