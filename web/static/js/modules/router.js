// The original coffeescript version of this was written by developers from Tinkerbox Studios

import "./controllers"

(() => {
  let controllers = {}

  Controllers.bind = (call, $el, selector, evt, handler) => {
    let el, i, len, ref
    if (call) {
      ref = $el.find(selector)
      for (i = 0, len = ref.length; i < len; i++) {
        el = ref[i]
        handler({
          currentTarget: el
        })
      }
    }
    $el.on(evt, selector, handler)
  }

  $(document).on("turbolinks:load", () => {
    console.log("Powered by Turbolinks")
    let $body, action, c, controller, loader, ref, view
    $body = $(document.body)
    window.$debug = $body.attr("data-debug")
    view = $body.attr("data-view")
    if ($debug) {
      console.log("view:", view)
    }
    ref = view.split("#"), controller = ref[0], action = ref[1]
    if ((loader = Controllers[controller])) {
      c = (controllers[controller] || (controllers[controller] = new loader))
      if (c.before_action && c.before_action(action) === false) {
        return
      }
      if (c[action] && c[action](action) === false) {
        return
      }
      if (c.after_action && c.after_action(action) === false) {
        return
      }
    }
  })

}).call(this)
