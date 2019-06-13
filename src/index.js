import { Page } from "./page/index.js"
import page from "page"

export const setup = $ => {
  $.fn.createPage = options => {
    const defaults = {
      template: "<h1>{{data}}</h1>",
      prerender: props => {data: props}//eslint-disable-line no-unused-labels
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
      element: "div",
      page: new Page(),
      data: {}
    }
    
    options = $.extend(defaults, options)
    
    options.page.render(options.data, $(options.element))
  }
  return $
}
