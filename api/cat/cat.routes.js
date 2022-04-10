const express = require('express')
const { getBreeds, getBreedById, getImagesByBreedId } = require('./cat.controller')
const router = express.Router()

router.get('/', getBreeds)
router.get('/:breedId', getBreedById)
router.get('/image/:breedId', getImagesByBreedId)

module.exports = router
