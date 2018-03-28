# Script for populating the database. You can run it as:
#
#     mix run priv/repo/seeds.exs
#
# Inside the script, you can read and write to any of your
# repositories directly:
#
#     TaskTracker3.Repo.insert!(%TaskTracker3.SomeSchema{})
#
# We recommend using the bang functions (`insert!`, `update!`
# and so on) as they will fail if something goes wrong.

alias TaskTracker3.Repo
alias TaskTracker3.Tasks.Task
alias TaskTracker3.Users.User

Repo.delete_all(User)
a = Repo.insert!(%User{name: "alice"})
b = Repo.insert!(%User{name: "bob"})
c = Repo.insert!(%User{name: "carol"})
d = Repo.insert!(%User{name: "dave"})

Repo.delete_all(Task)
Repo.insert!(%Task{user_id: a.id, title: "Task 01"})
Repo.insert!(%Task{user_id: b.id, title: "Task 02"})
Repo.insert!(%Task{user_id: b.id, title: "Task 03"})
Repo.insert!(%Task{user_id: c.id, title: "Task 04"})
Repo.insert!(%Task{user_id: d.id, title: "Task 05"})
