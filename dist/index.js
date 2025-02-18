"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const db_1 = __importDefault(require("./Configs/db"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const cors_1 = __importDefault(require("cors"));
const userRoute_1 = __importDefault(require("./Route/userRoute"));
const doctorRoute_1 = __importDefault(require("./Route/doctorRoute"));
const adminRoute_1 = __importDefault(require("./Route/adminRoute"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = process.env.PORT;
// Connect to Database
(0, db_1.default)();
// Enable CORS
app.use((0, cors_1.default)({
    origin: process.env.FRONTEND_URL,
    credentials: true,
}));
app.use(express_1.default.json());
app.use((0, cookie_parser_1.default)());
app.use((req, res, next) => {
    console.log(`Incoming Request: ${req.method} ${req.url}`);
    next();
});
// Routes
app.use('/user', userRoute_1.default);
app.use('/doctor', doctorRoute_1.default);
app.use('/admin', adminRoute_1.default);
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
