"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
require("dotenv/config");
const express_1 = __importDefault(require("express"));
require("./databases/mongodb");
const index_routes_1 = require("./routes/index.routes");
const CORS_ORIGIN = process.env.NODE_ENV === "production"
    ? process.env.CORS_ORIGIN
    : process.env.CORS_ORIGIN_DEVELOPMENT;
const PORT = process.env.PORT;
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)({
    origin: CORS_ORIGIN,
}));
app.get("/api", (req, res) => {
    res.json({ status: "Server is ok" });
});
app.use("/api", index_routes_1.router);
app.listen(PORT || 8080, () => console.log("Server is running 🚀"));
