require("whatwg-fetch")

import React from "react"
import ReactDOM from "react-dom"
import TodoApp from "../components/todo/app"

export default Controllers["page"] = class Page {

  index() {
    initializeComponent()
    attachComponent()
  }

}

function initializeComponent() {
  window.todo = xcomponent.create({
    tag: 'todo-app',
    url: 'https://689abfc5.ngrok.io',
    singleton: true,
    props: {
      api_token: {
        type: 'string',
        required: true
      }
    },
    dimensions: {
      width: 375,
      height: 667
    },
    contexts: {
      iframe: true,
      lightbox: false,
      popup: false
    },
    defaultContext: 'iframe'
  })
}

function attachComponent() {
  window.todo.attach({
    onEnter: function() {
      renderMap(this.props.api_token)
    }
  })
}

function renderTodoApp() {
  const list = [
    { id: 1, title: 'Hafiz' },
    { id: 2, title: 'Atiqah' },
    { id: 3, title: 'Wafa' }
  ]

  ReactDOM.render(<TodoApp list={list} />, document.getElementById("react-component-todo"))
}
