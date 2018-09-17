const mongoose = require('mongoose');
const marked = require('marked');

const commentSchema = new mongoose.Schema({
  content: { type: String, required: true, maxlenght: 280 },
  user: { type: mongoose.Schema.ObjectId, ref: 'User', required: true }
}, {
  timestamps: true
});

const articleSchema = new mongoose.Schema({
  title: { type: String, required: true },
  subtitle: { type: String, required: true },
  image: { type: String, pattern: /^https?:\/\/.+/ },
  text: { type: String},
  textHTML: { type: String},
  blockQuote: { type: String},
  readingTime: {type: Number, required: true},
  // comments:
  comments: [ commentSchema ],
  user: { type: mongoose.Schema.ObjectId, ref: 'User'},
  published: {type: Boolean}
});

articleSchema.pre('save', function convertToMarkddown(next) {
  if(this.isModified('text')) {
    this.textHTML = marked(this.text);
    // this.text = this.text;
  }
  next();
});


module.exports = mongoose.model('Article', articleSchema);
