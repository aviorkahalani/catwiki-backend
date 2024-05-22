"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getImagesByCatBreedId = exports.getCatBreedById = exports.getCatBreeds = void 0;
const axios_1 = __importDefault(require("axios"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const BASE_URL = 'https://api.thecatapi.com/v1';
const getCatBreeds = async () => {
    const { data } = await axios_1.default.get(`${BASE_URL}/breeds`, {
        headers: {
            'x-api-key': process.env.X_API_KEY,
        },
    });
    return data;
};
exports.getCatBreeds = getCatBreeds;
const getCatBreedById = async (id) => {
    const breeds = await (0, exports.getCatBreeds)();
    return breeds.find((breed) => breed.id === id);
};
exports.getCatBreedById = getCatBreedById;
const getImagesByCatBreedId = async (id) => {
    const { data } = await axios_1.default.get(`${BASE_URL}/images/search`, {
        params: {
            limit: 8,
            breed_id: id,
        },
        headers: {
            'x-api-key': process.env.X_API_KEY,
        },
    });
    const images = data.reduce((acc, item) => {
        acc.push(item.url);
        return acc;
    }, []);
    return images;
};
exports.getImagesByCatBreedId = getImagesByCatBreedId;
