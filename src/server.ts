import { Application, Request, Response } from "express";
import cors from "cors";
import apiRouter from "./routes/api.routes";
import express from "express";

export default function createServer() {
    const app: Application = express();

    app.use(cors());
    app.use(express.json());
    app.use("/", (req: Request, res: Response) => {
        res.send("Hello World!");
    });
    app.use("/api", apiRouter);

    return app;
}
