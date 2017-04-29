# Product Name: ACP (Art Collaboration Platform)
&nbsp;
## Iteration 3 - Review & Retrospect
&nbsp;
* Date: March 23 2017

* Where: Online WeChat Meeting
&nbsp;

## Project Process Reflection:

This iteration primarily focused on the integration of our backend technologies with our frontend frameworks. Some decisions were made or are still to be made regarding the finalization of our backend details on aspects such as deployment and storage, but the vast majority of the functional REST API has been built. We still developed both the backend and frontend in parallel, but work was also dedicated to connecting the full stack. We aimed to have the majority of the already developed connections completed by the end of this iteration, iron out backend deployment and storage details, as well as improve the workflow and completeness of the frontend through additional pages.

#### Effective Decisions:

1. Informal offline and online meetings for workflow management and discussion
	* Following a decision to abandon workflow management using the Github issues board, we have instead decided locally distribute and organize work between the different developmental branches of our project. We would discuss what each branch should aim to have completed by the end of the iteration and then leave the details of workflow division and organization to the members participating in development. This proved to be much more efficient and clean, with communication being facilitated through a highly accessible chat service, WeChat. We would still maintain and direct project direction through our weekly meetings.

	* <img src="https://github.com/csc301-winter-2017/project-team-06/blob/deliverable-2-styles/img/wechat.png" width="200"> (A screen shot of the online meeting)

2. Localized organization of branching development
	* Due to various conflicting code issues that occurred during our previous iteration of development, we decided to follow a more fractured but concentrated organizational structure localized to each branch. Members working on the same branch would elect someone to organize the workflow within the branch and identify possible conflicting development. Furthermore, task and work division were also handled locally within each branch. This allowed for the more general direction of project flow to be less muddled with the details of numerous branches and lead to a cleaner organization overall for the project.
 
	* <img src="https://github.com/csc301-winter-2017/project-team-06/blob/iteration-03-style/img/wechattask.jpg" width="200"> (Picture of instructions given out in Wechat group)

3. Mandatory weekly meetings for progress checkup and milestone discussion
	* Once again a central part of our planning phase for every iteration, the weekly meeting during tutorials still proves to be an effective way to discuss overall project progress and planning. Due to the more fragmented nature of our internal and local developmental organization, these meetings proved even more valuable in keeping our entire group on the same pace and direction.

#### Not as effective decisions:

1. Pull Request Managers:
	* Our group agrees that this is a good practice to utilize, but due to our already very effective communication, there rarely needs to be a utilization of a dedicated pull request manager. Despite group members not knowing specific details of other developmental branches, we all have a very good idea of the overall direction of the project and thus all share an equal knowledge of project deployability. As such, we usually end up leaving it to the separate branches to decide when to merge with the master branch. Overall, our pull-request managers for the master branch have not been as effective as expected.

2. Github issues board:
	* With our more localized development, the usage of a general issues board has been declining. It is much more efficient for separate branches to update issues and discuss them on our localized WeChat groups than to wait for others to check and then pick up issues to contribute to. We suspect this may be due to the separation and division of the group into well-defined areas, as well as the size of each development branch. The Github issues board may work better on a much larger scale project, or a project that does not already have very effective and constant communications.

	* <img src="https://github.com/csc301-winter-2017/project-team-06/blob/iteration-03-style/img/gitboard.JPG" width="600"> (Picture of our GitHub issues board)

#### Planned changes ( or already made):

1. Pull Request Managers:
	* With our more effective local organization, we have decided that instead of assigning one or two group members to oversee pull requests, that we instead allow any group member to accept pull requests. This is due to the fact that we have developed an effective communications system such that we no longer need a very rigorous inspection of the pull request. However, we have decided that it is still the responsibility of the pull-requester to ensure that his/her code works as intended and does not create any between other branches and the master.

## Product and Process Progress and Review

#### Completed goals and tasks:

Back End:
1. Modify and optimize all schemas and queries so that everything will perform as expected in POSTMAN. In addition:
	* Create and utilize the archive table to store the upload times of all products and projects.

	* [Possible picture of archive table]

2. Optimize [REST APIs](https://github.com/csc301-winter-2017/project-team-06/blob/iteration-03-style/src/server/routing.js) and integrate individual views
	* Optimized and implemented individual views in relation to the front end.

3. Complete Login and Register functionalities
	* [Login](https://github.com/csc301-winter-2017/project-team-06/blob/iteration-03-style/src/app/components/LoginPage/LoginPage.js) and [Registration](https://github.com/csc301-winter-2017/project-team-06/blob/iteration-03-style/src/app/components/RegisterPage/RegisterPage.js) functionalities are completed and integrated with the front end.

4. Implement the backend image storage server and functionality. This includes database identifiers and a file system on the 	server-side which stores the actual images.
	* The functionality and implementation have been completed, but discussions are still being held on what technology or service will be in charge of hosting and deploying our web application. 

Front End:
1. Fix all existing bugs for all implemented UI pages.
	* Existing bugs and responsive artifacts are fixed in all currently completed front-end page formats.
		
	* <img src="https://github.com/csc301-winter-2017/project-team-06/blob/iteration-03-style/img/mainUI.png" width="600"> (Picture of our main page)
	* <img src="https://github.com/csc301-winter-2017/project-team-06/blob/iteration-03-style/img/projectUI.png" width="600"> (Picture of our product page)

2. Create Sign-in and Registration pages with included functionality and all required forms for the main page, profile page and product pages. This includes all artifacts necessary for full functionality such as buttons.
	* Basic skeleton of necessary artifacts is completed and integrated. Further polishing of aesthetic design needs to be completed.

	* <img src="https://github.com/csc301-winter-2017/project-team-06/blob/iteration-03-style/img/login.jpg" width="600"> (Picture of our sign-in page)
	* <img src="https://github.com/csc301-winter-2017/project-team-06/blob/iteration-03-style/img/regPage.jpg" width="600"> (Picture of our registration page)

3. Connect as many of the existing API’s as possible to existing frontend components
	* Majority of existing front-end pages have been connected including the newly created sign-in and registration page. These are primarily the pages which already have the basic visual polish from the previous iteration.

4. Create more front-end pages to improve the overall flow of the website and workflow of the product
	* Semi-complete; Profile, Product and Comments pages in stages of visual polish, pages dedicated to editing and creating new products and comments are in development. Back-end connectivity is being integrated as development is slowly completed.

5. Ensuring and fixing responsive design elements
	* Our frontend formatting is built primarily on the BootStrap framework. As such, responsive design is inherently implemented and pre-built for the majority of our pages. Issues with grid layouts and changes to optimize views have been made to existing pages.

	* [Shrink a page to very small size (like mobile size), and take a picture of responsive design?]

Misc:
1. Create a short demo video
	* A short demo video has been created detailing the updated features of our current iteration and progress. 
1. Update documentation as needed throughout the iteration
	* Our iteration plan has been updated to further elaborate our decisions and plans with more details. This is in response to our feedback from our previous iterations.

#### Goals and/or tasks that were planned but not met/completed:

Backend:
1. Creating and implementing a contribution table to keep track of a user’s contribution towards root products in POSTMAN.
	* A feature is still in development, but halted due to more pressing issues with deciding on deployment and storage options.

Frontend:
1. Create more front-end pages to improve the overall flow of the website and workflow of the product
	* Semi-complete; More pages are in various phases of development in regards to fully utilizing the features available in the backend APIs, but are not fully completed as of yet. More focus has been on integrating front-end to back-end connectivity.

## Meeting Highlights:

There are two major tasks identified for our final iteration of development:

1. The deployment and completion of our backend. We need to quickly discuss and identify our method of storage and deployment for our backend server. This way we can more easily test our backend to frontend connections as well as debug any issues that may arrive. Furthermore, this allows us to more easily identify issues with our frontend flow and design. The remaining backend functionality is then required for the final completion of our product design and goals. We are currently deciding between Heroku or AWS EC2 for our deployment options.

	* [Working with Amazon S3 Objects](http://docs.aws.amazon.com/AmazonS3/latest/dev/UsingObjects.html)
	* [NodeJS - Amazon Web Services - S3 - Uploading Files](https://www.youtube.com/watch?v=Gv0PJrMDBYc)
	* [Display Data Got From JSON In Reactjs In Table](http://stackoverflow.com/questions/35764692/display-data-got-from-json-in-reactjs-in-table)

2. Frontend implementation and connection to the backend. With the deployment of the backend in the near-future, the frontend needs to be pushed to completion to fully integrate the functionality into the platform. Current page elements still required include but are not limited to:

	* Important:
		* Product and Project Creation Pages
		* Product and Project Edit Pages
		* Profile Page and Profile Edit Page/ Portfolio
		* Product Listing Page
		* Project Listing Page
		* Search Page

	* Optional:
		* Admin Panel
		* Admin Pages

	* During this final stretch of development, we will be constantly connecting frontend elements to backend functionalities as they are created and polished. 
