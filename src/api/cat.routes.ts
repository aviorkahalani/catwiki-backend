import express from 'express'
import { fetchCatBreedById, fetchCatBreeds, fetchImagesByBreedId } from './cat.controller'

const router = express.Router()

router.get('/', fetchCatBreeds)
router.get('/:breedId', fetchCatBreedById)
router.get('/images/:breedId', fetchImagesByBreedId)

export default router
