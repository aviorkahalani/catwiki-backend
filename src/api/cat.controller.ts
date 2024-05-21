import { Request, Response } from 'express'
import { getCatBreeds, getCatBreedById, getImagesByCatBreedId } from './cat.service'

export const fetchCatBreeds = async (req: Request, res: Response) => {
  try {
    const breeds = await getCatBreeds()
    res.json(breeds)
  } catch (error) {
    res.status(500).json({ msg: 'Failed to fetch cat breeds.' })
  }
}

export const fetchCatBreedById = async (req: Request, res: Response) => {
  const { breedId } = req.params
  try {
    const breed = await getCatBreedById(breedId)
    res.json(breed)
  } catch (error) {
    res.status(500).json({ msg: `Failed to fetch cat breed with id ${breedId}.` })
  }
}

export const fetchImagesByBreedId = async (req: Request, res: Response) => {
  const { breedId } = req.params
  try {
    const images = await getImagesByCatBreedId(breedId)
    res.json(images)
  } catch (err) {
    res.status(500).json({ msg: `Failed to fetch cat breed images with id ${breedId}.` })
  }
}
