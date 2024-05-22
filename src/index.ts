import express from 'express'
import cors from 'cors'
import catRoutes from './api/cat.routes'

const PORT = process.env.PORT || 3030

const app = express()
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())
app.use(express.static('public'))

// ROUTES
app.use('/api/cat', catRoutes)

app.listen(PORT, () => {
  console.log(`server running on http://localhost:${PORT}`)
})
