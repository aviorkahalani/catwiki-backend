const catService = require('./cat.service')

module.exports = {
  getBreeds,
  getBreedById,
  getImagesByBreedId,
}

async function getBreeds(req, res) {
  try {
    const breeds = await catService.getBreeds()
    res.json(breeds)
  } catch (err) {
    res.status(500).send({ err: 'Failed to get breeds' })
  }
}

async function getBreedById(req, res) {
  try {
    const { breedId } = req.params

    const breed = await catService.getBreedById(breedId)
    console.log('breed :>> ', breed)
    res.json(breed)
  } catch (err) {
    res.status(500).send({ err: 'Failed to get breed' })
  }
}

async function getImagesByBreedId(req, res) {
  try {
    const { breedId } = req.params
    const images = await catService.getImagesByBreedId(breedId)
    res.json(images)
  } catch (err) {
    res.status(500).send({ err: 'Failed to get cat images' })
  }
}
