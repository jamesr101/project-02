# WDI-Project2
# General Assembly Project 2 : Full-stack Application Blog Platform

## Goal: to build a full-stack RESTful application that includes user authentication.

## Technologies used

* HTML5 / CSS / Javascript (ES6)
* git
* Express & EJS
* MongoDB & Mongoose
* BCrypt & Session Auth
* Bulma


## My Application - 'Blog...'
![Blog logo title](https://user-images.githubusercontent.com/40343797/45220826-6777ff00-b2a7-11e8-8511-8a5f00bc0b74.png)

### App overview
Blog... is a simple blogging platform which offers moderated commenting, admin users, searching and saving of draft articles.

This application allows users to read and publish blog posts. Users can read published articles and view moderated comments. Users can create an account and sign-in with their password and email address. Signed-in users can create and publish their own articles/posts. Signed-in can leave comments on articles. Users can remove their own comments and edit, un-publish or delete their own articles. Signed in users can delete their accounts. When a user deletes their account, any articles, published or unpublished, will also be removed, any comments left on other articles will become anonymous.

##### Publishing Articles
Unpublished articles can only be viewed by their author from their account. A signed-in user can view all their published and unpublished from their **My Account** page. Articles can be published or unpublished at any point. Articles can be written with Markdown formatting.

##### Admin Users
Admin users have increased privileges. Admin users can view and delete any user account. They can also view, edit and delete other user's accounts. Admin users can give admin rights to other users. Unmoderated comments are only visible to their author or to admin users. An admin user must moderate a comment before it becomes visible to any other user.

### Responsiveness and design
This app was created with the Bulma framework and is fully functioning on all screen sizes.

![Desktop and mobile view](https://user-images.githubusercontent.com/40343797/45220826-6777ff00-b2a7-11e8-8511-8a5f00bc0b74.png)


### Instructions
1. All published articles can be seen from the **Articles Page** ('/articles') which can be reached by clicking on the 'Blog...' during any point of the user journey.

![Articles page](https://user-images.githubusercontent.com/40343797/45220826-6777ff00-b2a7-11e8-8511-8a5f00bc0b74.png)

The **Articles Page** is populated by panels representing each published article. The Articles Page will also show the results of searching using the search bar, also shown throughout the user journey. A search will return any articles which contain the search term within an article's *Title*, *Subtitle*, *Block Quote* or *Copy*. Clicking on any article panel will take you to the **Article Show Page**.

2. The **Article Show Page** will display the full article contents including the author's name and profile image. The author of the article or any admin user will also be shown an *'Edit article'* and *'Delete article'* button.

![Show Article page](https://user-images.githubusercontent.com/40343797/45220826-6777ff00-b2a7-11e8-8511-8a5f00bc0b74.png)
![Show Article page - Admin or Author view](https://user-images.githubusercontent.com/40343797/45220826-6777ff00-b2a7-11e8-8511-8a5f00bc0b74.png)

3. Users who are not signed-in will only see comments which have been modified. Users who are not signed-in can not leave comments and will be shown a *'Sign in'* button.

![Comments - non-signed-in user view](https://user-images.githubusercontent.com/40343797/45220826-6777ff00-b2a7-11e8-8511-8a5f00bc0b74.png)

A signed-in user will be able to leave comments on an **Article Show Page**. They will also be able to delete any previous comment they have made. Once a comment has be left, it will appear with a banner *'awaiting moderation'*. Comments awaiting moderation are only visible to the comment author or to admin users.

![Comments - signed-in user view](https://user-images.githubusercontent.com/40343797/45220826-6777ff00-b2a7-11e8-8511-8a5f00bc0b74.png)

An admin users can view and delete all comments. All comments appear with a banner showing whether they have been moderated or not. Comments can be moderated (to be visible to all users) or unmoderated (to be visible only to admins and the comment author) using the check box.

![Comments - Admin user view](https://user-images.githubusercontent.com/40343797/45220826-6777ff00-b2a7-11e8-8511-8a5f00bc0b74.png)


4. Signed in users can add new articles using the *'Add an article'* button in the nav bar. If the *'published'* checkbox is selected, the article will be visible to all users. If the *'unpublished'* checkbox is selected, the article will only be visible to the author and will only appear in their **My Account** page.

![Add an article](https://user-images.githubusercontent.com/40343797/45220908-b4f46c00-b2a7-11e8-9460-2a4dee40d0ae.png)

The **Edit article** page is similar to the *'Add an article'* but the form will be pre-filled with the article content.

![Edit an article](https://user-images.githubusercontent.com/40343797/45220908-b4f46c00-b2a7-11e8-9460-2a4dee40d0ae.png)

5. Signed-in users will see a link in the nav bar to **My Account**. This page shows the user their account details and will show all their published and unpublished articles. Unpublished articles will appear as grey. Account holders can edit or delete their account. Account deletion will also remove all articles with have been written by that user.

![My account page](https://user-images.githubusercontent.com/40343797/45221008-04d33300-b2a8-11e8-999e-62b50286c8ec.png)

Admin users are also given the link **All Users**. This page will show details of all user accounts. Any account can be removed or edited by an admin user. On a **Show Account Page**, an admin user will also be shown the option to make that account an admin or a non-admin.

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
