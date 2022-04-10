const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 3030

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
if (process.env.NODE_ENV === 'production') {
  // Express serve static files on production environment
  app.use(express.static(path.resolve(__dirname, 'public')))
} else {
  // Configuring CORS
  const corsOptions = {
    // Make sure origin contains the url your frontend is running on
    origin: ['http://127.0.0.1:3000', 'http://localhost:3000'],
    credentials: true,
  }
  app.use(cors(corsOptions))
}

const catRoutes = require('./api/cat/cat.routes')
app.use('/api/cat', catRoutes)

app.listen(PORT, () => {
  console.log(`app listening at http://localhost:${PORT}`)
})
