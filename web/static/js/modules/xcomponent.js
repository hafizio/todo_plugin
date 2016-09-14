import xcomponent from "xcomponent/dist/xcomponent"

(() => {
  initXChild()
  attachXChild()
}).call(this)

function initXChild() {
  window.Todo = xcomponent.create({
    tag: 'postco-widget',
    //url: 'https://todo-plugin-staging.herokuapp.com/map',
    url: 'https://c48acd39.ngrok.io/map',
    singleton: true,
    props: {
      apiKey: {
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

function attachXChild() {
  window.Todo.attach({})
}
