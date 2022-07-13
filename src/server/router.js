const express = require('express');
const topic = require('../controllers/topic');
const entry = require('../controllers/entry');
const debe = require('../controllers/debe');
const user = require('../controllers/user');
const page = require('../controllers/page');
const search = require('../controllers/search');
const autoComplete = require('../controllers/autoComplete');

const router = express.Router();

let response;


/* GET threads listing. */
// router.get('/basliklar', async (req, res, next) => {
//   response = await thread.list(req.url);
//   res.json(response);
// });

/* GET single thread */
router.get('/baslik/:slug/:page?', async (req, res, next) => {
  response = await topic(req.params.slug, req.params.page);
  res.json(response);
});

/* GET single entry */
router.get('/entry/:id', async (req, res, next) => {
    // console.log(req.params)
    response = await entry(req.params.id);
    res.json(response);
});

/* GET debe entries listing. */
router.get('/debe', async (req, res, next) => {
  response = await debe();
  res.json(response);
});

/* GET user profile */
router.get('/biri/:nick', async (req, res, next) => {
  response = await user(req.params.nick);
  res.json(response);
});

/* GET search result */
router.get('/ara/:query/:page?', async (req, res, next) => {
  response = await search(req.params.query, req.params.page);
  res.json(response);
});

/* GET autocomplete search result */
router.get('/autocomplete/:query', async (req, res, next) => {
  response = await autoComplete(req.params.query);
  res.json(response);
});

/* GET user entry */
router.get('/son-entryleri/:nick/:page?', async (req, res, next) => {
  response = await page(req.params.nick,req.params.page);
  res.json(response);
});

module.exports = router;