import request from 'supertest';
import { expect } from 'chai';
import createServer from "../../src/server";

const app = createServer();

describe('Checking API routes', function() {

    it('POST request to "/api/encrypt" should return encrypted data', function(done) {
        request(app)
            .post('/api/encrypt')
            .send({data: "data", key: "key"})
            .set('Accept', 'application/json')
            .expect(200, {result: "86 85 76 96"}, done);
      });

      it('POST request to "/api/decrypt" should return decrypted data', function(done) {
        request(app)
            .post('/api/decrypt')
            .send({data: "86 85 76 96", key: "key"})
            .set('Accept', 'application/json')
            .expect(200, {result: "data"}, done);
      });

      it('GET request to "/api/keygen" should return generated key', function(done) {
        request(app)
            .get('/api/keygen')
            .set('Accept', 'application/json')
            .expect(200, done);
      });


});