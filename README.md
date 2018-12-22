# WDI-Project2
# General Assembly Project 2 : Full-stack Application Blog Platform

## Goal: to build a full-stack RESTful application that includes user authentication.

### Timeframe
5 days

## Technologies used

* JavaScript (ES6) / HTML5 / CSS
* Express & EJS
* MongoDB & Mongoose
* BCrypt & Session Auth
* git / gitHub
* Bulma


## My Application - 'Blog...'
![blog title logo](https://user-images.githubusercontent.com/40343797/47254377-8bf3f900-d459-11e8-98c5-c504c5c46e4a.png)
A live version of this site can be found on Heroku ----> [Wdi-express-blog.herokuapp.com](https://wdi-express-blog.herokuapp.com/articles)
### App overview
Blog... is a simple blogging platform which offers moderated commenting, admin users, searching and saving of draft articles.

This application allows users to read and publish blog posts. Users can read published articles and view moderated comments. Users can create an account and sign-in with their password and email address. Signed-in users can create and publish their own articles/posts. Signed-in can leave comments on articles. Users can remove their own comments and edit, un-publish or delete their own articles. Signed in users can delete their accounts. When a user deletes their account, any articles, published or unpublished, will also be removed, any comments left on other articles will become anonymous.

##### Publishing Articles
Unpublished articles can only be viewed by their author from their account. A signed-in user can view all their published and unpublished articles from their **My Account** page. Articles can be published or unpublished at any point. Articles can be written with Markdown formatting.

##### Admin Users
Admin users have increased privileges. Admin users can view and delete any user account. They can also view, edit and delete other user's accounts. Admin users can give admin rights to other users. Unmoderated comments are only visible to their author or to admin users. An admin user must moderate a comment before it becomes visible to any other user.

### Responsiveness and design
This app was created with the Bulma framework and is fully functioning on all screen sizes.

<img width="242" alt="Article Show Page Mobile" src="https://user-images.githubusercontent.com/40343797/47254380-98785180-d459-11e8-954e-1f4a0c8f3695.png">



### Instructions
1. All published articles can be seen from the **Articles Page** ('/articles') which can be reached by clicking on the 'Blog...' during any point of the user journey.

   ![articles index page](https://user-images.githubusercontent.com/40343797/47254393-c8275980-d459-11e8-92d4-8f6c33d463d9.png)

   The **Articles Page** is populated by panels representing each published article. The Articles Page will also show the results of searching using the search bar, also shown throughout the user journey. A search will return any articles which contain the search term within an article's *Title*, *Subtitle*, *Block Quote* or *Copy*. Clicking on any article panel will take you to the **Article Show Page**.

2. The **Article Show Page** will display the full article contents including the author's name and profile image. The author of the article or any admin user will also be shown an *'Edit article'* and *'Delete article'* button.

   <img src="https://user-images.githubusercontent.com/40343797/47254402-ec833600-d459-11e8-81e0-8547235cc03a.png" alt="article show page signed in annotated" width="450"/>

3. Users who are not signed-in will only see comments which have been modified. Users who are not signed-in can not leave comments and will be shown a *'Sign in'* button.

   ![comments not signed in annotated](https://user-images.githubusercontent.com/40343797/47254407-0755aa80-d45a-11e8-8edd-886347d80128.png)

   A signed-in user will be able to leave comments on an **Article Show Page**. They will also be able to delete any previous comment they have made. Once a comment has be left, it will appear with a banner *'awaiting moderation'*. Comments awaiting moderation are only visible to the comment author or to admin users.

   ![awaiting moderation annotated](https://user-images.githubusercontent.com/40343797/47254416-22c0b580-d45a-11e8-9af3-21c15f8ca544.png)

   An admin users can view and delete all comments. All comments appear with a banner showing whether they have been moderated or not. Comments can be moderated (to be visible to all users) or unmoderated (to be visible only to admins and the comment author) using the check box.

   ![comments admin view](https://user-images.githubusercontent.com/40343797/47313003-b5697c00-d635-11e8-888f-1cc416cd7ece.png)

4. Signed in users can add new articles using the *'Add an article'* button in the nav bar. If the *'published'* checkbox is selected, the article will be visible to all users. If the *'unpublished'* checkbox is selected, the article will only be visible to the author and will only appear in their **My Account** page.

   The **Edit article** page is similar to the *'Add an article'* but the form will be pre-filled with the article content.

   ![edit article page](https://user-images.githubusercontent.com/40343797/47254425-4f74cd00-d45a-11e8-9ee3-e878f1b88025.png)

5. Signed-in users will see a link in the nav bar to **My Account**. This page shows the user their account details and will show all their published and unpublished articles. Unpublished articles will appear as grey. Account holders can edit or delete their account. Account deletion will also remove all articles with have been written by that user.

   ![account page](https://user-images.githubusercontent.com/40343797/47254428-5e5b7f80-d45a-11e8-9988-1c33d58dfe5b.png)

   Admin users are also given the link **All Users**. This page will show details of all user accounts. Any account can be removed or edited by an admin user. On a **Show Account Page**, an admin user will also be shown the option to make that account an admin or a non-admin.

   ![admin user index page](https://user-images.githubusercontent.com/40343797/47254894-d24c5680-d45f-11e8-8fc5-88f88742b04b.png)

## Process

After planning the basic relationships of the articles, users and comments, I proceed to create the models of these resources in Mongoose. I then created the RESTful routes needed to view, create, edit and delete these resources. I then protected some routes with authentication and sessions. I finally added Admin users and further protect to some routes for admin users.

Once the API responses were working successfully, I created the front-end views in EJS. During this project, I wanted to concentrate the different things that each user could see, whether they were signed-in, an author or an admin. This was particularly complicated in the comments section.

I then created a user profiles and allowed admin users to view, delete and give admin rights to other accounts.

This project was managed using **Trello** to plan and prioritise tasks.

### Challenges

I wanted to focus on the privileges of an admin user. The most challenging aspect of this came with the comments functionality. There are several different conditions as to whether a comment is shown or not; whether the user is signed-in, if the comment belongs to the user, if the comment has been moderated or if the user is an admin. This required some tricky logic in the EJS view but I enjoyed the challenge.

Another complicated feature was removing all articles written by a particular user, if their author's account has been removed. However, this turned out to be possible with a simple pre-remove hook added to the User model in Mongoose.

### Wins

I am really pleased with how the comments functionality worked, especially how comments must be moderated by admins before they are publicly visible. I also like the way a user's profile image will automatically appear in the new comment model when a user is signed in.

## Future features

I had no time to add any visual features to the homepage. I would like to add featured articles which could be chosen by admins. These could be displayed alongside the most recently published articles on the homepage. Other potential features would be the ability to like articles and follow authors. Again, this could determine what articles are featured on the homepage, with articles written by followed authors appearing on the homepage when users are signed-in.

Styling was not a priority for this project. If I had more time, I would like to have showed more original styling with SCSS/CSS.
