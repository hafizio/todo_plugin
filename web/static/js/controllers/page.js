require("whatwg-fetch")

import React from "react"
import ReactDOM from "react-dom"
import TodoApp from "../components/todo/app"

export default Controllers["page"] = class Page {

  index() {
    renderTodoApp()
  }

}

function renderTodoApp() {
  fetch("https://todo-backend-rails.herokuapp.com", {
    method: "GET",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json"
    }
  }).then((response) => {
    return response.json()
  }).then((jsonData) => {
    ReactDOM.render(<TodoApp items={jsonData} />, document.getElementById("react-component-todo-app"))
  })
}
