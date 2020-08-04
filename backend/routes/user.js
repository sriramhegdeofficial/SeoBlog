const express = require('express');
const router = express.Router();
const {authMiddleware, requireSignIn , adminMiddleware} = require('./../controllers/auth');
const { profileRead} = require('./../controllers/user');


router.get('/profile', requireSignIn, authMiddleware, profileRead);



module.exports = router;