import { randomNumber, doubleCrypt, keyValidation } from '../../src/services/hepler.service';
import { expect } from "chai";

describe('Checking helper service', function() {
    it('randomNumber with range [1,1] should return a number 1', function() {
        const num = randomNumber(1, 1);
        expect(num).equal(1);
    });

    it('doubleCrypt should return an array of numbers', function() {
        const data = doubleCrypt([10, 20, 30]);
        expect(data).to.be.an('array');
        data.forEach((value) => expect(value).to.be.a('number'));
    });

    it('keyValidation should return a string with given length', function() {
        const validKey = keyValidation(12, 'test');
        expect(validKey).equal('testtesttest');
    });
});