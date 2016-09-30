defmodule TodoPlugin.PageController do
  use TodoPlugin.Web, :controller

  def index(conn, _params) do
    RailsApi.start
    todos = RailsApi.get!("/").body

    props = %{
      "items" => todos
    }

    result = TodoPlugin.ReactIO.json_call!(%{
      component: "./priv/static/server/js/todo_plugin.js",
      props: props
    })

    render(conn, "index.html", html: result["html"], props: props)
  end

  def about(conn, _params) do
    render(conn, "about.html")
  end

end
