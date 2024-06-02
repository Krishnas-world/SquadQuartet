const express = require('express');
const { signout } = require('../controllers/userController');
const router = express.Router();

router.post('/')
router.post('/signout', signout)

module.exports = router;