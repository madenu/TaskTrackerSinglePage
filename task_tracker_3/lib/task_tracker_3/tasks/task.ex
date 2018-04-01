defmodule TaskTracker3.Tasks.Task do
  use Ecto.Schema
  import Ecto.Changeset

  schema "tasks" do
    field(:description, :string)
    field(:is_completed, :boolean, default: false)
    field(:time_spent, :time)
    field(:title, :string)
    belongs_to(:user, TaskTracker3.Users.User)

    timestamps()
  end

  @doc false
  def changeset(task, attrs) do
    task
    |> cast(attrs, [:title, :description, :time_spent, :user_id, :is_completed])
    |> validate_required([:title, :description, :time_spent, :user_id, :is_completed])
  end
end
