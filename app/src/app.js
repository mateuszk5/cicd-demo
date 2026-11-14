const express = require('express');
const { add } = require('./math');
const app = express();

app.get('/health', (req, res) => res.json({ status: 'ok' }));
app.get('/', (req, res) => res.json({
  service: process.env.SERVICE_NAME || 'monolith',
  env: process.env.APP_ENV || 'local',
  version: process.env.APP_VERSION || 'dev'
}));
app.get('/add/:a/:b', (req, res) =>
  res.json({ result: add(Number(req.params.a), Number(req.params.b)) }));

module.exports = app;