const mongoose = require('mongoose');
const { dbURI } = require('../config/environment');

const Article = require('../models/article');
const User = require('../models/user');



mongoose.connect(dbURI, (err, db) => {
// delete the database ready for new data
  db.dropDatabase(() => {


    User.create([{
      name: 'William Shakespeare',
      email: 'admin@gmail.com',
      profileImage: 'https://philharmoniedeparis.fr/sites/default/files/styles/fancybox_limit/public/shakespeare.jpg?itok=PtXjYzKK',
      password: 'pass',
      passwordConfirmation: 'pass',
      admin: true
    },{
      name: 'Ernest Hemingway',
      email: 'usertwo@gmail.com',
      profileImage: 'https://karsh.org/wordpress/wp-content/uploads/2016/10/Yousuf-Karsh-Ernest-Hemingway-1957-1558x1960.jpg',
      password: 'pass',
      passwordConfirmation: 'pass'
    },
    {
      name: 'Virginia Woolf',
      email: 'userthree@gmail.com',
      profileImage: 'https://i.wpimg.pl/O/644x627/d.wpimg.pl/927756629-1994609274/virginia-woolf.jpg',
      password: 'pass',
      passwordConfirmation: 'pass'
    },
    {
      name: 'Franz Kafka',
      email: 'userfour@gmail.com',
      profileImage: 'https://images.gr-assets.com/authors/1495464914p5/5223.jpg',
      password: 'pass',
      passwordConfirmation: 'pass'
    }], (err, users) => {
      if(err) console.log(err);
      console.log(`${users.length} users seeded into DB!`);

      Article.create([{
        title: 'My First Article',
        subtitle: 'This is a really good article, you should read it',
        image: 'https://dragnut.files.wordpress.com/2014/11/underwood.jpg',
        text: 'This is a # h1 I think?'
        ,
        user: users[0],
        blockQuote: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
        readingTime: 5,
        published: true
      }, {
        title: 'My Second Article',
        subtitle: 'This is also a really good article, you should read it too',
        image: 'https://dragnut.files.wordpress.com/2014/11/underwood.jpg',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        user: users[1],
        blockQuote: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
        readingTime: 10,
        published: true
      }], (err, articles) => {
        if(err) console.log(err);
        console.log(`${articles.length} articles seeded into DB!`);
        mongoose.connection.close();
      });
    });
  });
});
