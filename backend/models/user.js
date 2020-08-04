const mongoose = require('mongoose');
const crypto = require('crypto');

const userSchema = new mongoose.Schema({
    username : {
        type: String,
        trim: true,
        required: true,
        max: 32,
        unique: true,
        index: true,
        lowercase: true
    },
    name : {
        type: String,
        trim: true,
        required: true,
        maxlength: 32
    },
    email : {
        type: String,
        trim: true,
        required: true,
        maxlength: 32,
        unique: true,
        lowerCase: true
    },
    profile : {
        type: String,
        required: true

    },
    hashed_password: {
        type: String,
        required: true,

    },
    salt: String,
    about : {
        type: String
    },
    role : {
        type: Number,
        default: 0
    },
    photo : {
        data: Buffer,
        contentType: String
    },
    resetPasswordLink : {
        data: String,
        default: ''
    }

}, {timestamp: true});

userSchema.methods = {
    
    encryptPassword: function(password) {
        if(!password) {
            return '';
        }
        try {
            return crypto.createHmac('sha1', this.salt)
                        .update(password)
                        .digest('hex')
        }
        catch(error) {
            return '';
        }
    },

    makeSalt: function() {
        return Math.round(new Date().valueOf() * Math.random()) + '';
    },
    authenticate: function(plainText) {
        return this.encryptPassword(plainText) === this.hashed_password
    }
}

userSchema.virtual('password')
        .set(function(password) {
            this._password = password;
            this.salt = this.makeSalt();
            this.hashed_password = this.encryptPassword(password);
        })
        .get(function() {
            return this._password;
        });



module.exports = mongoose.model('User', userSchema);