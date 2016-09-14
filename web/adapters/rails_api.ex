defmodule RailsApi do
  use HTTPoison.Base

  @expected_fields ~w(
    title
  )

  def process_url(url) do
    "https://todo-backend-rails.herokuapp.com" <> url
  end

  defp process_response_body(body) do
    body
    |> Poison.decode!
    |> Map.take(@expected_fields)
    |> Enum.map(fn({k, v}) -> {String.to_atom(k), v} end)
  end
end
