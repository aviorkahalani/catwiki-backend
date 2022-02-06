const express = require('express')
const { getBreeds, getBreed, getBreedImages } = require('./cat.controller')
const router = express.Router()

router.get('/breeds', getBreeds)
router.get('/breed/:breedId', getBreed)
router.get('/breed/image/:breedId', getBreedImages)

module.exports = router
