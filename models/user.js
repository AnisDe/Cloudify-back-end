const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose')

const Images = [
            "https://static.vecteezy.com/ti/vecteur-libre/t2/1993889-belle-femme-latine-avatar-icone-personnage-gratuit-vectoriel.jpg" , 
            "https://static.vecteezy.com/ti/vecteur-libre/t2/2002403-homme-avec-barbe-avatar-personnage-icone-isole-gratuit-vectoriel.jpg",
            "https://img.freepik.com/vecteurs-libre/homme-affaires-caractere-avatar-isole_24877-60111.jpg",
            "https://www.blexar.com/avatar.png"
        ]

const UserSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    resetPasswordToken: {
        type: String
    },
    resetPasswordExpires: {
        type: Date
    },
    isVerified: {
        type: Boolean,
        default: false
    },
    emailToken: {
        type: String
    },
    isSubscibed: {
        type: Boolean,
        default: false
    },
    solde: {
        type: Number,
        required: false
    },
    ownedGames: [{
        type: Schema.Types.ObjectId,
        ref: 'Game'
    }],
    avatar : {
        type: String,
        default: Images[Math.floor(Math.random()*4)]
    }


});
UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', UserSchema);