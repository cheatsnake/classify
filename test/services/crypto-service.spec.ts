import cryptoService from '../../src/services/crypto.service';
import { expect } from "chai";

describe('Checking crypto service', function() {
    it('encrypt method should return a string of numbers', function() {
        const data = cryptoService.encryptData("data", "key");
        expect(data).to.be.a('string');
        data.split(" ").forEach((value) => expect(+value).to.be.a('number'));
        
    });

    it('decrypt method should return a string', function() {
        const data = cryptoService.encryptData("data", "key");
        expect(data).to.be.a('string');
    });
});