const mongoose = require('mongoose');

// const uri = process.env.HABIT_URI;


mongoose.connect("mongodb+srv://kavyabanan8498:czSIbyv9GPmnLxuW@cluster0.14kzkde.mongodb.net/");
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'DB Error'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

//'mongodb://127.0.0.1:27017/habit_track'
