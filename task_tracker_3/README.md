# TaskTracker3

## TODO
* authenticate task creation

## Design Notes
This project is a successfully deployed, HTTPS, single-page, task tracker web application. Registered users may securely log in with their username and password to manage tasks.

In my design, there is no option for users to create their own accounts. Only the webmaster may add users. For this example site, the database has been populated with the examples we have used in class (i.e. Alice, Bob, etc.).

As part of my design, any registered user may create and assign tasks for/to any other user on the same site. Instances of this task tracker site can be considered team workspaces, where all the registered members would belong to the same team.

Only logged in users may create tasks, but everyone has read only access to the tasks.

## Known Bugs
* The completed checkbox is overlapped by its label.
* The form has 15 min increments for minutes spent, but doesn't disable custom input.
* When a registered user logs in, their ID is shown instead of their username.
* Currently anyone can create a task on the site, but I do not want to attempt to fix this, because it would require me to redeploy, which is too risky this close to the deadline
