const axios = require('axios')
require('dotenv').config()

module.exports = {
  getBreeds,
  getBreed,
  getBreedImages,
}

async function getBreeds() {
  const { data } = await axios.get('https://api.thecatapi.com/v1/breeds')
  const catBreed = data.map((breed) => {
    return { _id: breed.id, name: breed.name }
  })
  return catBreed
}

async function getBreed(breedId = 'sibe') {
  const { data } = await axios.get('https://api.thecatapi.com/v1/breeds/search', {
    params: {
      q: breedId,
    },
    headers: { 'x-api-key': process.env.API_KEY },
  })
  return data
}

async function getBreedImages(breedId = 'sibe', limit = 10) {
  const { data } = await axios.get('https://api.thecatapi.com/v1/images/search', {
    params: {
      breed_id: breedId,
      limit,
      mime_types: 'png,jpg',
    },
    headers: { 'x-api-key': process.env.API_KEY },
  })
  const breedImgs = data.map((breed) => {
    return { id: breed.id, url: breed.url }
  })
  return breedImgs
}
