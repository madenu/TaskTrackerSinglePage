defmodule TaskTracker3Web.TokenController do
  use TaskTracker3Web, :controller
  alias TaskTracker3.Users.User

  def create(conn, %{"username" => username, "password" => password}) do
    with {:ok, %User{} = user} <- TaskTracker3.Users.get_and_auth_user(username, password) do
      token = Phoenix.Token.sign(conn, "auth token", user.id)

      conn
      |> put_status(:created)
      |> render("token.json", user: user, token: token)
    end
  end
end
