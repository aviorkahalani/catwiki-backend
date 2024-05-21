import axios from 'axios'
import dotenv from 'dotenv'
import { CatBreed, ImageResponse } from '../types'

dotenv.config()

const BASE_URL = 'https://api.thecatapi.com/v1'

export const getCatBreeds = async () => {
  const { data } = await axios.get(`${BASE_URL}/breeds`, {
    headers: {
      'x-api-key': process.env.X_API_KEY,
    },
  })

  return data as CatBreed[]
}

export const getCatBreedById = async (id: string) => {
  const breeds = await getCatBreeds()
  return breeds.find((breed) => breed.id === id)
}

export const getImagesByCatBreedId = async (id: string) => {
  const { data } = await axios.get(`${BASE_URL}/images/search`, {
    params: {
      limit: 8,
      breed_id: id,
    },
    headers: {
      'x-api-key': process.env.X_API_KEY,
    },
  })

  const images: string[] = data.reduce((acc: string[], item: ImageResponse) => {
    acc.push(item.url)
    return acc
  }, [])

  return images
}
