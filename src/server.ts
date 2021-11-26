import { Application } from "express";
import cors from "cors";
import apiRouter from "./routes/api.routes";
import express from "express";

export default function createServer() {
    const app: Application = express();

    app.use(cors());
    app.use(express.json());
    app.use("/", express.static(__dirname + "/../public"));
    app.use("/api", apiRouter);

    return app;
}
