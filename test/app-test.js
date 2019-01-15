const request = require('supertest');
const app = require('../server.js');

describe('app', () => {
  it('should serve html on index', (done) => {
    request(app).get('/').expect('Content-Type', /html/).expect(200, done)
  });
});
