# Final Remarks and Reflections

## Key Points to mention
* Project starter has the right to accept or decline a uploaded product to project starter’s project, thus any non-relevant products can be rejected by the project starter. (so that each project is not a collection of random images)

* Here is the tree view of a project that we were trying to build. The root is the original project that the project starter started with, and other nodes are the artwork that different artist came up with on top of their parent node. We wanted to show the whole history of the project so the artist can visualize the formation of the artwork and different ideas that people have. Since different people have different ideas, therefore the project starter is excited to see what people can come up with on top of the artwork he uploaded. 
* <img src="https://github.com/csc301-winter-2017/project-team-06/blob/master/img/TreeViewDemo.jpg" width="400"> 

* We attribute this to some design and render limitations we were unfamiliar with in utilizing the setup that we have. As such, we were unable to overcome these limitations but still tried our best to create a style similar to the tree view that we had envisioned by using different tiers and levels. This is the tree view that we have built at the end. We definitely will complete the tree view by doing more research into it. 
* <img src="https://github.com/csc301-winter-2017/project-team-06/blob/master/img/MonalisaTreeView.jpg" width="500"> 
* The project starter uploaded the painting of Monalisa as the starting point. Two other cat-lover users downloaded the original artwork. One of them changed Monalisa's face to cat face and uploaded it, while the other user added a cat and Monalisa is holding the cat. At some point later, the first user thought that the color of the cat face Monalisa was not quite good, so he uploaded another cat face Monalisa after some editing. Notice that this product is showing on the last level. This is because that the user did not contribute to the original Monalisa, he contributed to the cat face Monalisa instead.


## Process workflow (we didn’t have time to talk about the workflow in our demo so we add it here)
- WeChat
- Online meeting
- Task distribution
- Google Doc
- Logs
- GitHub branch
- We use branches instead of committing all to master

# Contributions
## LeonYuAng3NT - Contributions and Comments
### Front end: 
- Early version of Login,Register page.
### Back end:
- First version of back-end APIs
- Implementations of uploading images to Amazon S3 buckets()
- Facebook-login implementations
### Full-Stack:
- Authenticates of user using sessions.
- Connect Search page, Profile page, Product page, Project page,Display all comments  to backend APIs
- Heroku deployment
- POSTMAN testing on backend functions

## SmileWuji - Contributions and Comments
- My contribution to this project mainly involves the front-end to back-end connection technicalities. Since many of my team members, including myself, are new to JavaScript and especially new to the React view framework, much of my work is actually to write interfaces or example pages that serve as an abstraction of the actual functionality we want to achieve. 
- In terms of concrete contribution, I have written some early version of the artwork display page (ie the product page), search page and project page. Also, I am one of the commentator of the two video demos.
- In terms of the lessons I have learned, first of all I wanna mention the HackWithIX hackathon which introduced the React framework that this project is using. However, to actually get used to React and React Bootstrap, lots of documentations need to be consulted, and the consulting process is what I learned most valuable during this project.


## Yanboding - Contributions and Comments
### Full-Stack:
- Complete Upload function, Download function, and password reset system
- Support team to finish login page and register page
### Back end:
- Find all pictures from database to support treeview and listview functions work
### Database:
- Support team to design schema and write queries
### Other:
- Debug Comment page at backend and frontend
- Debug login and register function using facebook
- Change some layout 

## MXKLZL - Contributions and Comments
### Database:
- Created database, maintaining database, write queries that backend functions can use
### Front end:
- Display error message to user, improve front end UI including the login, register, comment and homepage
### Back end:
- Add backend functionality including get user’s contribution to projects in the profile page
- Add error checking on backend functions, and tested backend function with Postman.

## Cyferouss - Contributions and Comments
### Front End:
- Planned front end frameworks and overall design and navigation flow.
- Brought and utilized React Bootstrap for more streamlined development of the front-end framework
- Planned and created FrontEnd frameworks and templates for Index, Product, Profile, Search, Project, Comment as well as designed the various navigation tools and placeholders.
- Discussed with back-end development about various features that could be useful and should be on the various pages.
- Connected homepage and database to implement the product showcase.
### Back end:
- Aided in design of product showcase queries and routes as well as connected it to the front-end.
### Other:
- Debugging web app in final stages as well as maintaining consistency of wording and phrasing.
- Transcribed and drafted formal documentation for each of the iterations.
### Comment:
- Overall I do not think my commits on GitHub really reflect some of the work I have done. A lot of it has to do with planning features and the flow of web app. Being new to React and web development in general, I was unable to help as much with the nitty gritty details of back-end development, but I do think I achieved a sizeable contribution with just front-end development. The code additions that I have made are mostly on new components and aspects of the web app and I tried to avoid editing and modifying other’s works that I may not have understood as much about. Furthermore, I have not yet settled into the habit of habitually committing all my work and progress. I normally like to do big chunks of work and commit all at once rather than small chunks which may not serve too much of a purpose right away. 

## VickieO - Contributions and Comments
### Front End:
- Contributed to the comment component, home page and product page.
- Improved front end with usability problems detected.
### Back End:
- Implemented and assisted teammates to build functionality related to the comment component.
- Tested and debugged backend functions.
### Other:
- Did manual test to detect any bugs or UI problems.
### Comment:
- As the only member in the team who is new to both web design and database, I spent quite much time learning how to build a web at the beginning. Therefore, the contribution graph in Github shows that I did a minor contribution to the project in the first few weeks since that is the time I was learning knowledge needed for web development. With the help of my teammates and the knowledge I gained on the Internet, I gradually increased my contribution to the project. 
- Before this project, I knew nothing about web development and right now I am familiar with the whole process of web development and are able to implement most of it. Although my contribution to the project might be less than some other teammates, I tried my best to contribute to the team and I learned a lot from this project.

________________________________________________________________________________________________________________________________________
(Original localhost setup, ignore for final remarks)

# Art Collaboration Platform (CSC301 Project)

This project uses the [webpack-express-boilerplate](https://github.com/christianalfoni/webpack-express-boilerplate) as part of the starter code.

To run the server on localhost:8888, follow the steps below:

# (1) If you haven't install [NodeJS](https://nodejs.org/en/), install it.

# (2) cd to src 

```shell
$cd src
```

# (2.5) If this is the first time you run this server, please install all the server dependencies.

```shell
$npm install
```

# (3) If you haven't configure or install the database [sqlite3](https://www.sqlite.org/download.html), please do so. After that, setup the schema.

```shell
$sqlite3 db.sqlite
sqlite> .read schema.sql

```

Note: you can always reset the database by typing " sqlite> .read schema.sql " in sqlite.

To verify you did the righting, run the following command and expect these output:

```shell
sqlite> .tables
Administrator  Comment        Product
Archive        Contribution   User
```

Close the DBMS. Make sure db.sqlite is stored in your file system.

```shell
sqlite> .quit
```

# (4) Run the database in src. You don't have to run the database to set up the server, but some functionalities may not be supported without db.

```shell
$ cd src
$ sqlite3 db.sqlite
```

# (5) Open another terminal and run the server. 

```shell
$ cd src
$ npm start
```

Wait until "webpack: Compiled successfully." pops up.

Then, open your browser, type "localhost:8888" and hit enter.

# (6) To shut down the server, double-hit ctrl-c. To shut down the db safely, run .quit so the db file "db.sqlite" will be consistent each time you run the server.

