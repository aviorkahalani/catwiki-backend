const express = require('express')
const app = express()
const PORT = 3000

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

const catRoutes = require('./api/cat/cat.routes')
app.use('/api/cat', catRoutes)

app.listen(PORT, () => {
  console.log(`app listening at http://localhost:${PORT}`)
})
