"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const cat_routes_1 = __importDefault(require("./api/cat.routes"));
const PORT = process.env.PORT || 3030;
const app = (0, express_1.default)();
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use(express_1.default.static('public'));
// ROUTES
app.use('/api/cat', cat_routes_1.default);
app.listen(PORT, () => {
    console.log(`server running on http://localhost:${PORT}`);
});
