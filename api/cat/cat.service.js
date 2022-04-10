const axios = require('axios')
require('dotenv').config()

module.exports = {
  getBreeds,
  getBreedById,
  getImagesByBreedId,
}

async function getBreeds() {
  const { data } = await axios.get('https://api.thecatapi.com/v1/breeds', {
    headers: {
      'x-api-key': process.env.API_KEY,
    },
  })
  return data
}

async function getBreedById(breedId) {
  const breeds = await getBreeds()
  return breeds.find((breed) => breed.id === breedId)
}

async function getImagesByBreedId(breedId = 'sibe', limit = 10) {
  const { data } = await axios.get('https://api.thecatapi.com/v1/images/search', {
    params: {
      limit: 8,
      breed_id: breedId,
    },
    headers: {
      'x-api-key': process.env.API_KEY,
    },
  })
  const images = data.reduce((acc, item) => {
    acc.push(item.url)
    return acc
  }, [])
  return images
}
