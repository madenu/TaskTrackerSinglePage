defmodule TaskTracker3.Repo.Migrations.CreateTasks do
  use Ecto.Migration

  def change do
    create table(:tasks) do
      add(:title, :string)
      add(:description, :text)
      add(:time_spent, :time)
      add(:is_completed, :boolean, default: false, null: false)
      add(:user_id, references(:user, on_delete: :nothing))

      timestamps()
    end

    create(index(:tasks, [:user_id]))
  end
end
