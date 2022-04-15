const User = require('./models/user');

module.exports = {
    isLoggedIn: (req, res, next) => {
        if (!req.isAuthenticated()) {
            console.log('You must be signed in first!');
            return res.send('You must be signed in first!')
        }
        next();
    },
    isAdmin: function (req, res, next) {
        if (req.isAuthenticated()) {
            Game.findById(req.params.id, function (err, game) {
                if (req.user.isAdmin) {
                    next();
                } else {
                    return console.log("You have to be admin !");

                }
            });
        } else {
            return console.log("You have to login !");
        }
    }
}
