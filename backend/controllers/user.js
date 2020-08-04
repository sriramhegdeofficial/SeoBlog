const User = require('./../models/user');


exports.profileRead = (req, res) => {
    req.profile.hashed_password = undefined;
    return res.json(req.profile);
}