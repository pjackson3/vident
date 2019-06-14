import page from "page"
import { Component } from "./component/index.js"

export const setup = $ => { // Sets up the plugins and returns the modified jQuery object. This is 
  $.fn.createRoute = options => {
    const defaults = {
      route: "/",
      component: new Component("<h1>{{data}}</h1>")
    }
    
    options = $.extend(defaults, options)
    
    page(options.route, options.component.render({}, $(this)))
  }
  
  $.fn.route = options => {
    const defaults = {
      route: "/"
    }
    
    options = $.extend(defaults, options)
    
    page(options.route)
  }
  
  $.fn.loadRoutes = () => {
    page()
  }
  
  $.fn.createComponent = options => {
    const defaults = {
      template: "<h1>{{data}}</h1>",
      prerender: false
    }
    
    options = $.extend(defaults, options)
    
    return new Component(options.template, options.prerender)
  },
  
  $.fn.renderComponent = options => {
    const defaults = {
      component: new Component(),
      data: {}
    }
    
    options = $.extend(defaults, options)
    
    options.component.render(options.data, $(this))
  }
  
  return $
}
