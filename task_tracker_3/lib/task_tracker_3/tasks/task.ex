defmodule TaskTracker3.Tasks.Task do
  use Ecto.Schema
  import Ecto.Changeset

  schema "tasks" do
    field(:description, :string, default: "")
    field(:is_completed, :boolean, default: false)
    field(:minutes_spent, :integer, default: 0)
    field(:title, :string, default: "")
    belongs_to(:user, TaskTracker3.Users.User)

    timestamps()
  end

  @doc false
  def changeset(task, attrs) do
    task
    |> cast(attrs, [:title, :description, :minutes_spent, :is_completed])
    |> validate_required([:title, :description, :minutes_spent, :is_completed])
  end
end
