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

p = Comeonin.Argon2.hashpwsalt("password1")

Repo.delete_all(User)
a = Repo.insert!(%User{name: "alice", password_hash: p})
b = Repo.insert!(%User{name: "bob", password_hash: p})
c = Repo.insert!(%User{name: "carol", password_hash: p})
d = Repo.insert!(%User{name: "dave", password_hash: p})

Repo.delete_all(Task)
Repo.insert!(%Task{user_id: a.id, title: "Task 01"})
Repo.insert!(%Task{user_id: b.id, title: "Task 02"})
Repo.insert!(%Task{user_id: b.id, title: "Task 03"})
Repo.insert!(%Task{user_id: c.id, title: "Task 04"})
Repo.insert!(%Task{user_id: d.id, title: "Task 05"})
