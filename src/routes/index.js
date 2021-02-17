const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index.html', { title: 'Cydemic | The Official Site' });
});

router.get('/contact', (req, res) => {
    res.render('contact.html', { title: 'Cydemic | The Official Site' });
});

router.get('/band', (req, res) => {
    res.render('band.html', { title: 'Cydemic | The Official Site' });
});

router.get('/merch', (req, res) => {
    res.render('merch.html', { title: 'Cydemic | The Official Site' });
});

router.get('/audio', (req, res) => {
    res.render('audio.html', { title: 'Cydemic | The Official Site' });
});

module.exports = router;