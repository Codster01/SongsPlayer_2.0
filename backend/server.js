const express = require('express');
const { MongoClient, ServerApiVersion } = require('mongodb');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
app.use(cors());
const port = 3000;
const Songs = require('./models/model.songs');
const uri = "mongodb+srv://Dhruv:Dhruv@cluster0.h6fh7fu.mongodb.net/songs?retryWrites=true&w=majority"; // Your MongoDB connection URI goes here
const dbName = 'songs';
const collectionName = 'songsDb';

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  
  const db = mongoose.connection;
  
  db.on('error', console.error.bind(console, 'MongoDB connection error:'));
  db.once('open', () => {
    console.log('Connected to MongoDB Atlas');
  });

  app.get('/songs', async (req, res) => {
    try {
       
      const songs = await Songs.find();
    
      res.send(songs);
    } catch (error) {
      console.error('Error fetching Songs:', error);
      res.status(500).send('Internal Server Error');
    }
  });
  

  app.listen(port, () => console.log(`Server is listening on port ${port}`));