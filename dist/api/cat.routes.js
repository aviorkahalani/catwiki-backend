"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cat_controller_1 = require("./cat.controller");
const router = express_1.default.Router();
router.get('/', cat_controller_1.fetchCatBreeds);
router.get('/:breedId', cat_controller_1.fetchCatBreedById);
router.get('/images/:breedId', cat_controller_1.fetchImagesByBreedId);
exports.default = router;
