import mongoose from 'mongoose'
import Movie from '../models/movie.model.js'

export const getMovie = async (req, res) => {
    try {
        const movie = await Movie.find({})
        if (movie.length === 0) {
            return res.status(404).json({ success: false, message: 'Movie not found' })
        }
        res.status(200).json({ success: true, data: movie })
    } catch (error) {
        console.error(error)
        res.status(404).json({ success: false, message: 'Server Error' })
    }
}

export const createMovie = async (req, res) => {
    const { title, description, director, cast, genre, duration, release_date, rating } = req.body

    if (!title || !description || !director || !cast || !genre || !duration || !release_date || !rating) {
        return res.status(400).json({ success: false, message: 'Create movie failed' })
    }

    try {
        const movie = await Movie.create(req.body)
        res.status(201).json({ success: true, data: movie })
    } catch (error) {
        console.error(error)
        res.status(500).json({ success: false, message: 'Internal Server Error' })
    }
}

export const updateMovie = async (req, res) => {
    const { id } = req.prammas

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ success: false, message: 'Invalid Product ID' })
    }

    try {
        const updateMovie = await Movie.findByIdAndUpdate(id, req.body, { new: true })
        res.status(200).json({ success: true, data: updateMovie })
    } catch (error) {
        console.error(error)
        res.status(404).json({ success: false, message: 'Server Error' })
    }
}

export const deleteMovie = async (req, res) => {
    const { id } = req.pramas

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ success: false, message: 'Invalid Product ID' })
    }

    try {
        await Movie.findByIdAndDelete(id)
        res.status(200).json({ success: true, message: 'Movie deleted successfully' })
    } catch (error) {
        console.error(error)
        res.status(404).json({ success: false, message: 'Server Error' })
    }
}