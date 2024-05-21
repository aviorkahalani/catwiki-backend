import express from 'express'
const PORT = 3030

const app = express()
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.listen(PORT, () => {
  console.log(`server running on http://localhost:${PORT}`)
})
