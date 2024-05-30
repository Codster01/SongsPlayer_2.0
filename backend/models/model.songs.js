const mongoose = require('mongoose');

const songSchema = new mongoose.Schema({
  _id:mongoose.Types.ObjectId,  
  id: String,
  song_name: String,
  singer_name: String,
  drive_link: String,
});

const Songs = mongoose.model('Songs', songSchema);

module.exports = Songs;
