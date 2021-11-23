import { extraCrypt, keyValidation } from "./hepler.service";

class CryptoService {
    encryptData(data: string, key: string): string {
        const validKey: string = keyValidation(data.length, key);
        const encryptData: number[] = [];

        for (let i: number = 0; i < data.length; i++) {
            const dataCode = data.charCodeAt(i);
            const keyCharCode = validKey.charCodeAt(i);
            const encryptedCode = dataCode ^ keyCharCode;

            encryptData.push(encryptedCode);
        }

        return extraCrypt(encryptData).join(" ");
    }

    decryptData(data: string, key: string) {
        const validData = data.split(" ").map(Number);
        const encryptData: number[] = extraCrypt(validData);
        const validKey: string = keyValidation(encryptData.length, key);
        const decryptedData: string[] = [];

        for (let i = 0; i < encryptData.length; i++) {
            const encryptedCode = encryptData[i];
            const keyCharCode = validKey.charCodeAt(i);
            const decryptedCode = encryptedCode ^ keyCharCode;
            const decryptedChar = String.fromCharCode(decryptedCode);

            decryptedData.push(decryptedChar);
        }

        return decryptedData.join("");
    }
}

const Crypto = new CryptoService();

const msg = Crypto.encryptData("", "");
console.log(msg);

const read = Crypto.decryptData(msg, "");
console.log(read);
