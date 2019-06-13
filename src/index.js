import { Page } from "./page/index.js"
import page from "page"
import { Component } from "./component/index.js"

export const setup = $ => { // Sets up the plugins and returns the modified jQuery object. This is 
  $.fn.createPage = options => { // This extension creates a new page instance. This can be accessed by $().createPage
    const defaults = {
      template: "<h1>{{data}}</h1>",
      prerender: (props) => {return {data: props}}
    }
    
    options = $.extend(defaults, options)
    
    return new Page(options.template, options.prerender)
  }
  
  $.fn.route = options => {
    const defaults = {
      route: "/",
      page: new Page("<h1>{{data}}</h1>")
    }
    
    options = $.extend(defaults, options)
    
    return page(options.route, options.page)
  }
  
  $.fn.renderPage = options => {
    const defaults = {
      page: new Page(),
      data: {}
    }
    
    options = $.extend(defaults, options)
    
    options.page.render(options.data, $(this))
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
