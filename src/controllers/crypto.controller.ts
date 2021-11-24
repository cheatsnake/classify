import { Request, Response } from "express";
import cryptoService from "services/crypto.service";

type TData = String | null;

class CryptoController {
    encryptData(req: Request, res: Response) {
        try {
            const { data, key } = req.body;
            const encryptedData: TData =
                cryptoService.encryptData(String(data), String(key)) || null;

            return res.json({ result: encryptedData });
        } catch (error) {
            res.status(400).json({ message: "Invalid data" });
        }
    }
    decryptData(req: Request, res: Response) {
        try {
            const { data, key } = req.body;
            const decryptedData: TData =
                cryptoService.decryptData(String(data), String(key)) || null;

            return res.json({ result: decryptedData });
        } catch (error) {
            res.status(400).json({ message: "Invalid data" });
        }
    }
}

export default new CryptoController();
