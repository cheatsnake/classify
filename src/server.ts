import { Application, Request, Response } from "express";
import cors from "cors";
import apiRouter from "./routes/api.routes";
import express from "express";

export default function createServer() {
    const app: Application = express();

    app.use(cors());
    app.use(express.json());
    app.use("/api", apiRouter);

    app.get("/", (req: Request, res: Response) => {
        res.send("Hello World!");
    });

    return app;
}
