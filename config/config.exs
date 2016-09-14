# This file is responsible for configuring your application
# and its dependencies with the aid of the Mix.Config module.
#
# This configuration file is loaded before any dependency and
# is restricted to this project.
use Mix.Config

# General application configuration
config :todo_plugin,
  ecto_repos: [TodoPlugin.Repo]

# Configures the endpoint
config :todo_plugin, TodoPlugin.Endpoint,
  url: [host: "localhost"],
  secret_key_base: "4WrwzJy0MKZOFKZTDuaD4I6ibVGcLfcSlFwfG+v/bt70DJMr36AEYVySOvCds/17",
  render_errors: [view: TodoPlugin.ErrorView, accepts: ~w(html json)],
  pubsub: [name: TodoPlugin.PubSub,
           adapter: Phoenix.PubSub.PG2]

# Configures Elixir's Logger
config :logger, :console,
  format: "$time $metadata[$level] $message\n",
  metadata: [:request_id]

config :phoenix, :template_engines,
  slim: PhoenixSlime.Engine,
  slime: PhoenixSlime.Engine

# Import environment specific config. This must remain at the bottom
# of this file so it overrides the configuration defined above.
import_config "#{Mix.env}.exs"
