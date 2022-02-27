const express = require('express');
const router = express.Router();
const games = require('../controllers/games');
const multer = require('multer');
const { storage } = require('../cloudinary')
const upload = multer({ storage });
const { isLoggedIn } = require('../middleware');


router.get('/', games.gamesList);

router.post('/', upload.array('image'), games.AddGames);

router.post('/BuyGame/:id', games.BuyGame);

router.put('/:id', upload.array('image'), games.EditGames);

router.delete('/:id', games.DeleteGames);


module.exports = router;
