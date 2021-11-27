import { Request, Response } from "express";
import keygen from "../services/keygen.service";

type TKey = string | null;

class KeygenController {
    keygen(req: Request, res: Response) {
        try {
            const length = Number(req.query.length) || 24;
            const symbols = Number(req.query.symbols) || 0;
            const key: TKey = keygen(length, symbols) || null;
            return res.json({ key });
        } catch (error) {
            res.status(400).json({ message: "invalid data" });
        }
    }
}

export default new KeygenController();
