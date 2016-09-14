defmodule TodoPlugin.ReactIO do
  use StdJsonIo, otp_app: :todo_plugin, script: "node_modules/react-stdio/bin/react-stdio"
end
