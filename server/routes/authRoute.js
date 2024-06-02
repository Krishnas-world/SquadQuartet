const express = require('express');
const { signin, signup, google, completeProfile } = require('../controllers/authController');
const router = express.Router();

router.post('/signin', signin) 
router.post('/signup', signup)
router.post('/google',google) // Outh2 Functionality
router.post('/completed-profile/:id', completeProfile)
module.exports = router;