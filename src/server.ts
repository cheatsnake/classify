import express, { Application, Request, Response } from "express";

export default function createServer() {
    const app: Application = express();

    app.get("/", (req: Request, res: Response) => {
        res.send("Hello world!");
    });

    return app;
}