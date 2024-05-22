"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchImagesByBreedId = exports.fetchCatBreedById = exports.fetchCatBreeds = void 0;
const cat_service_1 = require("./cat.service");
const fetchCatBreeds = async (req, res) => {
    try {
        const breeds = await (0, cat_service_1.getCatBreeds)();
        res.json(breeds);
    }
    catch (error) {
        res.status(500).json({ msg: 'Failed to fetch cat breeds.' });
    }
};
exports.fetchCatBreeds = fetchCatBreeds;
const fetchCatBreedById = async (req, res) => {
    const { breedId } = req.params;
    try {
        const breed = await (0, cat_service_1.getCatBreedById)(breedId);
        res.json(breed);
    }
    catch (error) {
        res.status(500).json({ msg: `Failed to fetch cat breed with id ${breedId}.` });
    }
};
exports.fetchCatBreedById = fetchCatBreedById;
const fetchImagesByBreedId = async (req, res) => {
    const { breedId } = req.params;
    try {
        const images = await (0, cat_service_1.getImagesByCatBreedId)(breedId);
        res.json(images);
    }
    catch (err) {
        res.status(500).json({ msg: `Failed to fetch cat breed images with id ${breedId}.` });
    }
};
exports.fetchImagesByBreedId = fetchImagesByBreedId;
