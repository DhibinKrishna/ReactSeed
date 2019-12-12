const express = require('express');
const router = express.Router();

// @route GET api/meta/:q
// @desc get metadata
// @access Public
router.get('/', async (req, res) => {
    res.json('Hello');
});

module.exports = router;