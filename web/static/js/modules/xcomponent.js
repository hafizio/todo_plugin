import xcomponent from "xcomponent/dist/xcomponent"

(() => {
  initXChild()
  attachXChild()
}).call(this)

function initXChild() {
  window.Todo = xcomponent.create({
    tag: 'todo-widget',
    url: 'https://071f9794.ngrok.io',
    singleton: true,
    props: {
      apiToken: {
        type: 'string',
        required: true
      },
      onItemAdd: {
        type: 'function',
        required: true
      },
      onItemsCleared: {
        type: 'function',
        required: true
      }
    },
    dimensions: {
      width: 375,
      height: 300
    },
    contexts: {
      iframe: true,
      lightbox: false,
      popup: false
    },
    defaultContext: 'iframe'
  })
}

function attachXChild() {
  window.TodoPlugin = window.Todo.attach({})
}
