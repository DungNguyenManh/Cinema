import express from 'express'
import { getMovie, createMovie, updateMovie, deleteMovie } from '../controllers/movie.controller.js'

const router = express.Router()

router.get('/', getMovie)
router.post('/', createMovie)
router.put('/:id', updateMovie)
router.delete('/:id', deleteMovie)

export default router