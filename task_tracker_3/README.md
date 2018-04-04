# TaskTracker3

Registering and logging in should use secure password authentication.
Passwords should be stored hashed in the database. (see the Elixir Comeonin module).
Phoenix sessions don't help with an SPA. You'll need to look into Phoenix.Token to handle user login and AJAX request authentication.
Your deployed app should only be accessible via HTTPS. Use Lets Encrypt and certbot.

## TODO
* Register users
* Store passwords with Elixir.Comeonin
* Use Phoenix.Token for using login and XMLHttpRequest auth
* Deploy with HTTPS using Let's Encrypt and CertBot

### Non-essential
* Change :hover property of Tasks
* Disable creation of duplicate tasks (i.e. Edit tasks)
* Change JSON controller routes
* Enforce 15-min increments (Render hours and minutes)
* Delete user accounts

## Design Notes
* New users may only be created by going through the registration link presented at the login page.
* The page is only viewable to users who are logged in.
To start your Phoenix server:
## Known Bugs
* The completed checkbox is overlapped by its label
* The form has 15 min increments for minutes spent, but doesn't disable custom input


  * Install dependencies with `mix deps.get`
  * Create and migrate your database with `mix ecto.create && mix ecto.migrate`
  * Install Node.js dependencies with `cd assets && npm install`
  * Start Phoenix endpoint with `mix phx.server`

Now you can visit [`localhost:4000`](http://localhost:4000) from your browser.

Ready to run in production? Please [check our deployment guides](http://www.phoenixframework.org/docs/deployment).

## Learn more

  * Official website: http://www.phoenixframework.org/
  * Guides: http://phoenixframework.org/docs/overview
  * Docs: https://hexdocs.pm/phoenix
  * Mailing list: http://groups.google.com/group/phoenix-talk
  * Source: https://github.com/phoenixframework/phoenix
