const express = require('express');
const router = express.Router();

// Home Page
router.get('/', (req, res) => {
    res.render('index');
});

// Subscription of Music on Spotify Page
router.get('/spotify', (req, res) => {
    res.render('spotify');
});

// Subscription of Movies on Netflix Page
router.get('/netflix', (req, res) => {
    res.render('netflix');
});

// Sales of Various Commodities in the Nigerian Market Page
router.get('/nigeria-market', (req, res) => {
    res.render('nigeria-market');
});

module.exports = router;
