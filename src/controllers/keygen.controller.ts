import { Request, Response } from "express";
import keygen from "../services/keygen.service";

type TKey = string | null;

class KeygenController {
    keygen(req: Request, res: Response) {
        try {
            const { length, symbols } = req.body;
            const key: TKey = keygen(Number(length), Boolean(symbols)) || null;
            return res.json({ key });
        } catch (error) {
            res.status(400).json({ message: "invalid data" });
        }
    }
}

export default new KeygenController();
