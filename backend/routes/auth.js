const express = require('express');
const router = express.Router();
const {signup, signin, signout, requireSignIn} = require('./../controllers/auth');

//validators
const { runValidation } = require('./../validators/index');
const { userSignupValidator, userSignInValidator } = require('./../validators/auth');

router.post('/signup', userSignupValidator, runValidation, signup);
router.post('/signin', userSignInValidator, runValidation, signin);
router.get('/signout', signout);

router.get('/secret', requireSignIn, (req, res) => {
    res.json({
        message: "finally!"
    })
})

module.exports = router;