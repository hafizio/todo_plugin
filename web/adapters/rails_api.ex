defmodule RailsApi do
  use HTTPoison.Base

  def process_url(url) do
    "https://todo-backend-rails.herokuapp.com" <> url
  end

  defp process_response_body(body) do
    body
    |> Poison.decode!
  end
end
