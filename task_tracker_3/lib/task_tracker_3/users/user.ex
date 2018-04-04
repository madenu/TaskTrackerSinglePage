defmodule TaskTracker3.Users.User do
  use Ecto.Schema
  import Ecto.Changeset

  schema "user" do
    field(:name, :string, default: "")
    field(:password_hash, :string)
    field(:password, :string, virtual: true)
    timestamps()
  end

  @doc false
  def changeset(user, attrs) do
    user
    |> cast(attrs, [:name, :password_hash])
    |> validate_required([:name, :password_hash])
  end
end
