defmodule TodoPlugin.LayoutView do

  use TodoPlugin.Web, :view

  def data_view(conn) do
    action = action_name(conn)
    controller = controller_name(conn)

    "#{controller}##{action}"
  end

  def data_debug do
    if (Mix.env == :dev), do: "true", else: "false"
  end

  def body_css_class(conn) do
    action = css_action_name(conn)
    controller = controller_name(conn)

    "#{controller} #{controller}-#{action}"
  end

  defp controller_name(conn) do
    Module.split(conn.private.phoenix_controller)
    |> List.last
    |> Macro.underscore
    |> String.split("_")
    |> List.first
  end

  defp action_name(conn) do
    conn.private.phoenix_action
  end

  defp css_action_name(conn) do
    action = action_name(conn)

    case action do
      :update -> :edit
      :create -> :new
      _ -> action
    end
  end

  def show_flash(conn) do
    get_flash(conn) |> flash_msg
  end

  def flash_msg(%{"info" => msg}) do
    ~E"<div class='alert alert-info'><%= msg %></div>"
  end

  def flash_msg(%{"error" => msg}) do
    ~E"<div class='alert alert-danger'><%= msg %></div>"
  end

  def flash_msg(_) do
    nil
  end

end
