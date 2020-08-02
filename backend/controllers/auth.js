const User = require('./../models/user');
const shortId = require('shortid');
const jwt = require('jsonwebtoken');
const expressJwt = require('express-jwt');

exports.signup = (req, res) => {

    User.findOne({ email: req.body.email}).exec((error, user) => {
        if(user) {
            return res.status(400).json({
                error: 'Email is taken'
            })
        }

        const {name, email, password} = req.body;
        let username = shortId.generate();
        let profile = `${process.env.CLIENT_URL}/profile/${username}`;

        let newUser = new User({ name , email, password, profile, username});
        newUser.save((error, user) => {
            if(error) {
                return res.status(400).json({
                    error: error
                })
            }

            
            res.json({ 
                message: 'Signed up successfully'
            })
        })
    })
};

exports.signin = (req, res) => {
    const { email, password} =  req.body;

    User.findOne({email}).exec((error, user) => {
        if(error || !user) {
            return res.status(400).json({
                error: 'User with that email doesn\'t exist. Please signup.'
            })
        }

        if(!user.authenticate(password)){
            return res.status(400).json({
                error: 'Email and password do not match'
            })
        }


        // generate jwt
        const token = jwt.sign({_id: user._id}, process.env.JWT_SECRET,{algorithm: 'HS256' }, {expiresIn: '1d'});
        res.cookie('token', token, {expiresIn: '1d'});

        const { _id, email, username, name, role} = user;
        return res.json({
            token,
            user: { _id, email, username, name, role}
        })

    })
}

exports.signout = (req, res) => {
    res.clearCookie('token');
    res.json({
        message: 'signed out successfully'
    })

};

exports.requireSignIn = expressJwt({
    secret: process.env.JWT_SECRET, algorithms: ['HS256']
})

