import "dotenv/config";

export const randomNumber = (max: number, min = 1): number =>
    Math.round(Math.random() * (max - min)) + min;

export function keyValidation(dataLength: number, key: string): string {
    let validKey = key;
    while (validKey.length < dataLength) {
        validKey += key;
    }
    return validKey.slice(0, dataLength);
}

export function doubleCrypt(encruptData: number[]): number[] {
    const extraEncryptData: number[] = [];
    const secretKey: string = <string>process.env.SECRET_KEY;

    for (let i = 0; i < encruptData.length; i++) {
        extraEncryptData.push(encruptData[i] ^ secretKey.charCodeAt(i));
    }

    return extraEncryptData;
}
