const catService = require('./cat.service')

module.exports = {
  getBreeds,
  getBreed,
  getBreedImages,
}

async function getBreeds(req, res) {
  try {
    const breeds = await catService.getBreeds()
    res.json(breeds)
  } catch (err) {
    res.status(500).send({ err: 'Failed to get breeds' })
  }
}

async function getBreed(req, res) {
  try {
    const { breedId } = req.params
    const breed = await catService.getBreed(breedId)
    res.json(breed)
  } catch (err) {
    res.status(500).send({ err: 'Failed to get breed' })
  }
}

async function getBreedImages(req, res) {
  try {
    const { breedId } = req.params
    const images = await catService.getBreedImages(breedId)
    res.json(images)
  } catch (err) {
    res.status(500).send({ err: 'Failed to get cat images' })
  }
}
