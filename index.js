const express = require('express');
const app = express();
const path = require('path');
let port = process.env.PORT;
if (port == null || port == "") {
  port = 8888;
}

const db = require('./db.json');

const router = express.Router();

const buildRandomString = require('./generator');

// ROUTING

router.get('/eggs', (req, res, next) => {
  res.json(db.foods.eggs);
});
router.get('/milks', (req, res, next) => {
  res.json(db.foods.milks);
});
router.get('/cheese', (req, res, next) => {
  res.json(db.foods.cheese);
});
router.get('/meat', (req, res, next) => {
  res.json(db.foods.meat);
});
router.get('/grains', (req, res, next) => {
  res.json(db.foods.grains);
});
router.get('/brands', (req, res, next) => {
  res.json(db.brands);
});
router.get('/full-list', (req, res, next) => {
  res.json(db.list);
});
router.get('/full', (req, res, next) => {
  res.json(db);
});
router.get('/random/:number', (req, res, next) => {
  res.send(buildRandomString(req.params.number));
});

app.use('/api', router);

// Setting port
app.listen(port, () => {
  console.log(`Your API is running on https://localhost:${port}`);
})
