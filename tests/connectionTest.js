import supertest from 'supertest';
import server from '../index.js';
import { should } from 'chai';
should();
const api = supertest.agent(server);

describe('Temperature Conversion API Tests', () => {
  after((done) => {
    server.close(() => {
      done();
    });
  });

  describe('POST /api/fromCelsiusToFahrenheit', () => {
    it('should convert 0°C to 32°F', async () => {
      const response = await api
        .post('/api/fromCelsiusToFahrenheit')
        .send({ temperature: 0 })
        .expect(200);

      response.body.should.have.property('result');
      response.body.result.should.equal(32);
    });

    it('should convert 100°C to 212°F', async () => {
      const response = await api
        .post('/api/fromCelsiusToFahrenheit')
        .send({ temperature: 100 })
        .expect(200);

      response.body.should.have.property('result');
      response.body.result.should.equal(212);
    });
  });

  describe('POST /api/fromFahrenheitToCelsius', () => {
    it('should convert 32°F to 0°C', async () => {
      const response = await api
        .post('/api/fromFahrenheitToCelsius')
        .send({ temperature: 32 })
        .expect(200);

      response.body.should.have.property('result');
      response.body.result.should.equal(0);
    });

    it('should convert 212°F to 100°C', async () => {
      const response = await api
        .post('/api/fromFahrenheitToCelsius')
        .send({ temperature: 212 })
        .expect(200);

      response.body.should.have.property('result');
      response.body.result.should.equal(100);
    });
  });

  describe('Error Handling', () => {
    it('should handle invalid routes', async () => {
      const response = await api
        .post('/api/invalidEndpoint')
        .expect(200);

      response.body.should.have.property('message');
      response.body.message.should.equal('A wrong link was entered');
    });
  });
});
