const mongoose = require('mongoose');


const articleSchema = new mongoose.Schema({
  title: { type: String, required: true },
  subtitle: { type: String, required: true },
  image: { type: String, pattern: /^https?:\/\/.+/ },
  text: { type: String},
  author: { type: String, required: true},
  blockQuote: { type: String},
  readingTime: {type: Number, required: true}

  // comments: [ commentSchema ],
  // user: { type: mongoose.Schema.ObjectId, ref: 'User'}
});

module.exports = mongoose.model('Article', articleSchema);
