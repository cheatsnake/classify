import { randomNumber } from "./hepler.service";

const symbolCodes = [58, 59, 60, 61, 62, 63, 64, 91, 92, 92, 93, 94, 95, 96];

function keygen(len: number, symbols: number): string {
    let key = "";
    while (key.length < len) {
        key += randomChar(symbols);
    }
    return key;
}

const randomChar = (symbols: number): string => {
    if (symbols) return String.fromCharCode(randomNumber(126, 33));

    let num: number = randomNumber(122, 48);

    while (symbolCodes.includes(num)) {
        num = randomNumber(122, 48);
    }

    return String.fromCharCode(num);
};

export default keygen;
