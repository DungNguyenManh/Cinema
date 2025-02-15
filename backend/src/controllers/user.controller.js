import User from '../models/user.model.js'

export const getUser = async () => {
    try {
        const user = await User.find({})
        if (user.length === 0) {
            return res.status(404).json({ success: false, message: 'User not found' })
        }
        res.status(200).json({ success: true, data: user })
    } catch (error) {
        console.error(error)
        res.status(404).json({ success: false, message: 'Server Error' })
    }
}

export const createUser = async (req, res) => {
    try {
        const user = await User.create(req.body)
        res.status(201).json(user)
    } catch (error) {
        console.error(error)
        res.status(400).json({ success: false, message: 'Loi error' })
    }
}
