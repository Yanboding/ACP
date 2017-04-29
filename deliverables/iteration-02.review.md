# Product Name: ACP (Art Collaboration Platform)
&nbsp;
## Iteration 2 - Review & Retrospect
&nbsp;
* Date: March March 03 2017
&nbsp;
* Where: Online WeChat Meeting
&nbsp;

## Project Process Reflection:

This iteration was heavily focused on technical aspects of the development of our project. With the planning phase over we focused on identifying and prioritizing the modules and sections that would be required to push our project towards completion. We partitioned our work among our group members and tackled all aspects of development in parallel to efficiently divide up our work. We aimed to have at least the key feature of our platform (the collaborative histogram) demonstrated for this iteration.

#### Effective Decisions:


1. Informal offline and online meetings for collaborative work and discussion
	* Due to the nature of scheduling a group of this size and trying to work with different schedules, these versatile meetings were extremely helpful in allowing for coordination between group members in various stages of the project development. Fast response and issue resolution allowed work to progress on many aspects of the project at once such as the database in relation to the API’s and the front-end in relation to the demo video.
	* <img src="https://github.com/csc301-winter-2017/project-team-06/blob/deliverable-2-styles/img/wechat.png" width="200"> (A screen shot of the online meeting)

2. Mandatory Weekly Meeting for progress checkup and milestone discussion
	* Taking advantage of one of the rare times where the majority of the group was available played a valuable role in directing project workflow and overall direction. Not only did this serve as a weekly check-up on progress, but also as a time where discussions could be had in regards to the project overall as a whole. Thanks to this, we were able to maintain steady progress on all aspects of the development cycle.

3. The GitHub Issues Feature
	* The issues feature proved to be a valuable asset when dealing with communicating technical details between group members working on similar branches and aspects of the project. This allowed members working in collaboration on the same section of the project to work without overlaps and assisted in reducing conflicts within the code and commits.
	* [Example of our issue](https://github.com/csc301-winter-2017/project-team-06/issues/13)


#### Not as effective decisions:

1. Workflow direction using the issue feed as a Kanban board
	* Despite the issues feed working well as a tool in implementing and discussing technical details, it did not perform as well as a checklist of tasks remaining. We found more effectiveness in simply discussing the larger tasks at hand during our weekly and online meetings instead of keeping track of the progress on the issues feed. Going forward, we have decided to continue using the issues feed as a bug/problem tracker instead of a workflow director and progress checker.

2. Communicating and organizing commits to project branches
	* A few conflicts in our code arose when pulling/pushing to the same branches from different members, Our original organization of our workflow dealt with assigned roles that managed pull requests to the master repository from different branches, but not anyone that supervised the commits to the respective branches themselves. As a result, we had to spend a fair bit of time debugging some of the conflicts resulting in errors specifically with the front-end rendering.

3. Adopting and utilizing a test-driven development methodology
	* Partway through this iteration, we discovered that our original plan of utilizing test-driven development was not an effective choice. Due to the varying features of our back-end implementation not yet being fully connected, test-driven development was actually holding up our progress as a whole. We instead opted to delay the testing phase for the next iteration when we have flushed out a much more completed and functioning back-end to front-end connection.

#### Planned changes (or already made):

1. Assigning a new responsibility in branched development
	* Building on the issues that we have experienced in this iteration, we realized multiple people contributing to the same branch of development can quickly generate code conflicts. To resolve this, we will be adopting a similar responsibility to that of the pull request manager. Members working on the same branch will assign someone to routinely inspect commits to notify the group members of any discovered code conflicts and errors. This will hopefully mitigate the number of commits that could compound a small error into a much larger and complex one.
	
&nbsp;

## Product and Process Progress and Review:

&nbsp;

#### Completed goals and tasks:


* Back End:
 
	1. Setup database server on back-end
		* Create database schemas
		* Brainstorm database relations
		* Discuss and optimize relations and tables
		* Construct schema.sql
		* Test schema.sql with SQL queries

		- All database related functionalities and methods have been implemented and are working as intended thus far.
			* [Schema](https://github.com/csc301-winter-2017/project-team-06/blob/master/src/schema.sql)
			* [Queries](https://github.com/csc301-winter-2017/project-team-06/blob/master/src/QUERY.SQL)
			* [Database setup and declaration of back-end functions](https://github.com/csc301-winter-2017/project-team-06/blob/master/src/server/routing.js)
	2. Create REST APIs and decide individual views
		* For the time being, all currently planned and discussed [REST APIs](https://github.com/csc301-winter-2017/project-team-06/blob/master/API.txt) have been implemented. These are subject to change at any time during the rest of the development process.

	3. Create a back-end function interface for login functionalities./ Create back-end functions that allow partial APIs work properly
		* We have also implemented other [back-end](https://github.com/csc301-winter-2017/project-team-06/blob/master/src/server/routing.js) helper functions as well as the various queries that will access our database. Some of these functionalities are not yet tested however and this portion of our project needs to be refactored and reorganized. (This was not originally planned for this iteration).

	4. Design a way for backend server to store user's images. (The database keeps track of the identifiers, while the file system on the server side stores the actual images.) 
		* We have decided to use AWS EC2 and AWS S3 to actually store the image object that the user will upload. Planned changes to modify the SQLite database and merge it to the AWS S3 bucket have been made.
		* Here is the [issue page](https://github.com/csc301-winter-2017/project-team-06/issues/13) for the storage discussion
	
* Front-End:
	1. Identify required pages
		* We brainstormed as a group early on and identified what we thought to be key aspects of the platform that were needed in the final product.
	2. Design and draft page layouts and templates
		* Group members responsible for the front-end then drafted up initial wireframes and sketches of the pages and the common elements belonging to each page. Flow was also considered but not fully indicated in the sketches.
		* <img src="https://github.com/csc301-winter-2017/project-team-06/blob/deliverable-2-styles/img/frontend.jpg" width="200"> (front end draft)
	3. Choose and setup front-end framework and test server.
		- Completed using webpack and React.js framework.

	4. Create a simple front-end view for the demo.
		* Create and code common layouts and templates (Header/Footer)
		* Create other page features as needed for the demo video first.
		* <img src="https://github.com/csc301-winter-2017/project-team-06/blob/deliverable-2-styles/img/frontend2.jpg" width="200"> (product page draft)
		* To capitalize on the modularity provided with the React framework, we first identified common page elements that may be reused throughout the renders of all pages. We made a basic navigation header and an informative footer that is reused for each page.
		* For the rest of the page specific elements, we wanted to have some aspects of our front-end flushed out with some degree of visual polish for the demo video required at the end of this iteration. To this extent, we focused on developing the primary pages that would be displayed in the demo video as a priority before focusing on other pages if we had time.
		* <img src="https://github.com/csc301-winter-2017/project-team-06/blob/deliverable-2-styles/img/mainUI.png" width="300"> (Our home page UI)	
		* <img src="https://github.com/csc301-winter-2017/project-team-06/blob/deliverable-2-styles/img/projectUI.png" width="300"> (Our product page UI)
* Misc:
	1. Create a short demo video
	2. Update documentation as needed throughout iteration

#### Goals and/or tasks that were planned but not met/completed:
* Back-End:
	* All goals/ tasks that we planned are completed, we actually finished some extract works that were not initially planned for this iteration. 

* Front-End:
	* The primary goals/tasks that we planned are completed. We optionally were considering developing more of the front-end beyond the primary pages required for the video demonstration. However, we considered this to be additional work that was to be undertaken should we have time.
&nbsp;

## Meeting Highlights:
&nbsp;&nbsp;
We have identified three major items from our review for this iteration that we will focus on for the next iteration:

1. The key connection between the front-end and the back-end. This major step will be the focus of our next iteration as it is the key component in actually making our project a functioning product. Some items that we have identified (but not limited to) for development are:
	1. Setup the AWS EC2 instance and test the functionality of the synchronization of our database and application.
	2. Identify and discuss proper user authentication and implementation in relation to the back-end functionality.
	3. Connect other various front-end fields and buttons with their corresponding back-end functionality.
	4. We will take a look at AWS SDK and learn how to use Key to distinguish items in the EC2 instance and will store our pictures in S3 bucket.

* Resources:
	* [AWS SDK for JavaScript in Node.js](https://aws.amazon.com/sdk-for-node-js/)
	* [Creating an Amazon EC2 Instance](http://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/ec2-example-creating-an-instance.html)

2. The implementation and optimization of the remaining UI and page elements for the rest of the platform. This includes but is not limited to:
	1. Registration and Login
	1. Admin Panel
	1. Profile Page
	1. Portfolio
	1. Search Page, Search Bar, and Search Results
	1. Product Listing Page

3. The adjustment of our project organization and workflow to resolve and prevent code conflicts and errors. To this extent, we will be making changes to the role distributions and responsibilities as well as pushing for increased communication between members working on similar or common branches. We hope that our insights from this iteration serve to reduce code conflict and errors between commits for the next iteration.

[wechat]:https://github.com/csc301-winter-2017/project-team-06/blob/deliverable-2-styles/img/wechat.png
[frontdraft1]:https://github.com/csc301-winter-2017/project-team-06/blob/deliverable-2-styles/img/frontend.jpg
[frontdraft2]:https://github.com/csc301-winter-2017/project-team-06/blob/deliverable-2-styles/img/frontend2.jpg
