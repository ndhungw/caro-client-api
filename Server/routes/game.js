const express = require("express");
const router = express.Router();
const authenticate = require("../middlewares/authenticate");
const GameController = require("../controllers/game-controller");

router.post("/create", authenticate, GameController.create);

router.get("/:gameId", GameController.find);

module.exports = router;
