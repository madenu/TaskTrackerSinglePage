defmodule TaskTracker3Web.TaskView do
  use TaskTracker3Web, :view
  alias TaskTracker3Web.TaskView
  alias TaskTracker3Web.UserView

  def render("index.json", %{tasks: tasks}) do
    %{data: render_many(tasks, TaskView, "task.json")}
  end

  def render("show.json", %{task: task}) do
    %{data: render_one(task, TaskView, "task.json")}
  end

  def render("task.json", %{task: task}) do
    %{
      id: task.id,
      title: task.title,
      user: render_one(task.user, UserView, "user.json"),
      description: task.description,
      minutes_spent: task.minutes_spent,
      is_completed: task.is_completed
    }
  end
end
