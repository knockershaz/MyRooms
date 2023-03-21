const express = require("express");
const router = express.Router();
const app = express();

const Room = require("../models/room");

var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: false }));


router.get("/getallrooms", async (req, res) => {
  try {
    const rooms = await Room.find({});
    res.send(rooms);
  } catch (err) {
    return res.status(400).json({message: err});
  }
});

router.post("/getroombyid", async (req, res) => {
  const roomid = req.body.roomid;
  try {
    const room = await Room.findOne({_id : roomid});
    res.send(room);
  } catch (err) {
    return res.status(400).json({message: err});
  }
});

module.exports = router;