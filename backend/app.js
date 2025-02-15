import express from 'express'
import userRoutes from './src/routes/user.route.js'
import movieRoutes from './src/routes/movie.route.js'

const app = express()

app.use(express.json())

app.use('/api/users', userRoutes)
app.use('/api/movies', movieRoutes)

export default app