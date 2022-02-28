const Game = require("../models/game");
const User = require("../models/user");
const { cloudinary } = require("../cloudinary");
const { CloudinaryStorage } = require("multer-storage-cloudinary");


module.exports.gamesList = async (req, res) => {
    const games = await Game.find({});
    res.send({ games });
};


module.exports.gamesSortByCategories = async (req, res) => {
    const games = await Game.find({categorie: req.body.categorie});
    res.send( games );
};




module.exports.AddGames = async (req, res) => {
    let name = req.body.name;
    let categorie = req.body.categorie;
    let tags = req.body.tags;
    let description = req.body.description;
    let price = req.body.price;
    let newgame = {
        name: name,
        categorie: categorie,
        tags: tags,
        description: description,
        price: price

    }
    const game = new Game(newgame);
    game.images = req.files.map(f => ({ url: f.path, filename: f.filename }));
    await game.save();
    res.send(game);
    console.log(game)

};








module.exports.EditGames = (req, res) => {
    Game.findOne({ id: req.params.id }, async (err, Modifiedgames) => {
        if (!Modifiedgames) {
            console.log('game invalid.');
        }
        const { name, categorie, tags, description, price } = req.body;
        const imgs = req.files.map(f => ({ url: f.path, filename: f.filename }))
        Modifiedgames.images.push(...imgs);
        if (name != "") { Modifiedgames.name = name; }
        if (categorie != "") { Modifiedgames.categorie = categorie; }
        if (tags != "") { Modifiedgames.tags = tags; }
        if (description != "") { Modifiedgames.description = description; }
        if (price != "") { Modifiedgames.price = price; }

        await Modifiedgames.save();
        console.log('games Modified!');
        res.send('games Modified');
    });

};

module.exports.DeleteGames = (req, res) => {
    Game.findByIdAndDelete(req.params.id, (err) => {
        console.log()
        if (err) {
            res.send(err);
        } else {

            res.send("Game Deleted or not found");
        }
    })
}

