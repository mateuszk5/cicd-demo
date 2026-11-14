const request = require('supertest');
const app = require('../../src/app');

test('GET /health', async () => {
  const res = await request(app).get('/health');
  expect(res.status).toBe(200);
  expect(res.body.status).toBe('ok');
});
test('GET /add/2/3', async () => {
  const res = await request(app).get('/add/2/3');
  expect(res.body.result).toBe(5);
});