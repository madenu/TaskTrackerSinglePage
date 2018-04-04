defmodule TaskTracker3.Repo.Migrations.AddPasswords do
  use Ecto.Migration

  def change do
    alter table("user") do
      add(:password_hash, :string)
      add(:pw_tries, :integer, null: false, default: 0)
      add(:pw_last_try, :utc_datetime)
    end
  end
end
