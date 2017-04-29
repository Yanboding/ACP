# Art Collaboration Platform (ACP)
## Iteration 3 Plan

 * Start date: March 16 2017
 * Projected date of review: March 23 2017
 * End date: March 24 2017

#### Changes from previous iteration
* Branch Request Managers:
  * By assigning this responsibility to individuals working on branches with multiple other people, we hope to eliminate the issue of complicated code conflicts. This responsibility will be discussed with and assigned to someone within each branch undergoing development by the project members associated with the branch. These individuals will routinely communicate between members and try to catch any conflicting development before it occurs, as well as resolve any issues that do occur.

* Different platform for organizing workflow and tasks:
  * We have opted to attempt a different platform for overall task and workflow management. One of the issues with our previous attempt at a universal workflow management board/plan was that our development within the project was very diverse. Issues and tasks were very localized and the each team member had very defined responsibilities. This lead to a clumping up of tasks on the board and made it overall harder to communicate effectively between team members. To resolve this, we are instead allow each individual member to identify tasks that are required, and facilitate co-ordination through the mobile messaging platform that we already use for our online meetings. This way, we are trying to maximize overall efficiency while still being able to keep track of the general direction of development with constant communication.
 
#### Roles & responsibilities

* Kaiyang Wen: Front End
* YanBo Ding: Database(Query), Back-End
* ZeLin Li: Pull-Request Manager, Back-End, Documentation
* YuAng Zhang: Front-End, Back-End
* Hao Tian Wang: Front-End, Documentation
* Chuying Ou: Back-End

##### Planned Events and Meetings:
* Mandatory meetings every week during scheduled in-class tutorials:
  * These meetings will be occasions where the majority of the group can come together and discuss about project/product direction and development. We plan to use these meetings as checkpoints for our development, as well as laying out the plans for new iterations. Furthermore, more wide-scale problems that need to be addressed across the entire stack of development are also brought up and discussed. These meetings are intended to be mandatory and formal, and is where we hope to get a bulk of the planning and organizational work done before beginning development on a new iteration cycle. 

* Optional daily online voice call check-ins:
  * These check-ins serve to aid team members in communicating more fluently and frequently, as well as addressing minor issues when they arise as soon as possible. Meant to be very informal and spontaneous, they are more of a group call where development happens than an actual meeting. The informal and accessible nature of these calls allow the group to quickly resolve major issues such as code conflicts and concerns without needing to organize a time to gather the entire group together. Furthermore, they also serve as a constant progress update between interconnected branches of development to better coordinate the team’s efforts. These meetings usually run at night, when members are relaxed and in a comfortable working environment.


##### Project Management Artifacts:
* A list of goals set for the iteration:
  * This list will be drawn up in the earliest weekly meeting and amended to the iteration plan at the start of every iteration. The key aspects of the plan are to identify the areas of focus for development during the iteration. It is also when we assign and rearrange responsibilities as a result of reviewing our progress and issues within the last iteration.
* GitHub repository:
  *  A standard in collaborative development, Github allows for our group to create and maintain an effective branching development system for our project. One of the main purposes for this is allowing for parallel development to occur and be stored in an easily accessible online space. Github’s log-keeping and roll-back features minimize code conflict and allows for easy identification of possible conflicts through communication between different members. Furthermore, the pull-request system for our master branch allows a degree of control over project management and development that would otherwise be hard to maintain.
* Online Google Doc Logs:
  * These logs will serve as our book-keeping tool to keep track of topics discussed during meetings and decisions made. This will be updated consistently to keep missing attendees up to date on current progress. However, they are not limited to purely discussion history. These logs may also contain any work or brainstorms that we have in regards to the project development and documentation. In any case, they will serve as a physical and accessible resource for us to not only document, but also log our progress.
* Project Managment with Github Issues and WeChat:
  * For our project management, we will utilize two technologies in particular. We will adopt the Kanban software process model through the use of GitHub issues. The issues feature will allow our team members to take responsibility for issues as well as showing the current distribution of debugging workload to other members of the team. We will prioritize issues in a scale of pri[1] to pri10, where the lower the number the higher the priority. Issues discovered can then be added to the GitHub repository where the work can be distributed. For our overall project management, we plan to utilize localized group chats between different the different development branches of the project. We allow the freedom and flexibility of internal organization within each development branch to their liking and advantages.

#### Git / GitHub workflow:
For our project development in this iteration, we have decided to do branching development on different modules for the final product. To this extent, we have decided to make branches for specific portions of the project such as back-end, front-end, documentation, database, etc. Due to the need to commit these branches to master when completed, we have also assigned pull request management responsibilities to members of the group. It is the jobs of these members to ensure that whatever is pulled to the master branch is deployable and non-conflicting. On top of the pull request managers to the master branch, each development branch also has an assigned team member overseeing possible conflicting development. These individuals will attempt to observe and identify possible issues in development before they occur, as well as solve any code conflicts that do arise.

## Product Goals and Tasks for Iteration 3:
##### Back End:
* Modify and optimize all schemas and queries so that everything will perform as expected in POSTMAN
  * Use the contribution table to keep track of user’s contribution towards the root product.  
  * Use the archive table to stores the upload time of all the product.
* Optimize REST APIs and integrate  individual views
* Complete Login and Register  functionalities; Aiming to complete more actual features.
* Implement and perform the feature where the backend server is able to store user's images. (The database keeps track of the identifiers, while the file system on the server side stores the actual images.).
* Decide and experiment which technologies will be in charge of the deployment of our web application(Heroku/ AWS EC2).

##### Front-End:
* Fix all existing bugs for all implemented UI pages.
* Implement Sign-in and Register page and added buttons, placeholders and forms to the main page, profile page and product page.
* Connect as many existing APIs as possible (build the connection between front-end and back-end)
* Create several front-end pages that are able to perform workflow of our application
* Start implementing features that are related to responsive designs

##### Misc:
* Create a short demo video
* Update documentation as needed throughout iteration

#### Artifacts for Goals and Tasks:
* Google Doc of meeting history and meeting log. Maintains a good record of the effectiveness of our planned meeting schedule.
* Local deployment with partially completed features able to demonstrate
* Proof of Amazon S3’s bucket and Proof of Heroku/Amazon EC2 instance
* Screenshots of Front-End development and UI
* New video demonstration of our progress this iteration

