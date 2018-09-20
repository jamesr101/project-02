const port = process.env.PORT || 4000;
const dbURI = process.env.MONDGODB_URI || 'mongodb://localhost:27017/blog-articles';

module.exports = { port, dbURI };
