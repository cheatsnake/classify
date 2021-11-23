import "dotenv/config";

export function keyValidation(dataLength: number, key: string): string {
    let validKey = key;
    while (validKey.length < dataLength) {
        validKey += key;
    }
    return validKey.slice(0, dataLength);
}

export function extraCrypt(encruptData: number[]): number[] {
    const extraEncryptData: number[] = [];
    const secretKey: string = <string>process.env.SECRET_KEY;

    for (let i = 0; i < encruptData.length; i++) {
        extraEncryptData.push(encruptData[i] ^ secretKey.charCodeAt(i));
    }

    return extraEncryptData;
}
