import React from "react"
import ReactDOM from "react-dom"

import App from "./todo/app"

if (typeof window === "undefined") {
  ReactDOM.render(<App/>, document.getElementById("react-component-todo"))
}
