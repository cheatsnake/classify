import keygen from '../../src/services/keygen.service';
import { expect } from "chai";

describe('Checking keygen service', function() {
    it('keygen function should return a string contains all characters except the space', function() {
        const key = keygen(100, 1);
        expect(key).to.be.a('string').that.not.include(' ');
    });
    it('keygen function with argument (symbols = 0) should return a string contains only numbers and letters', function() {
        const key = keygen(100, 0);
        expect(key).match(/^[a-zA-Z0-9]+$/);
    });
});