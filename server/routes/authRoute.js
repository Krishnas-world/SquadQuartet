const express = require('express');
const router = express.Router();

router.post('/signin', signin) 
router.post('/signup', signup)
router.post('/signout', signout)
router.post('/google',google) // Outh2 Functionality

module.exports = router;