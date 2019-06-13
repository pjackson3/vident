import { parse, render } from "mustache"

export class Component {
  constructor(template, prerender=false) {
    this.template = template
    if (prerender) {
      this.prerender = prerender
    }
    parse(this.template)
  }
  
  render(data) {
    if (this.prerender) {
      data = this.prerender(data)
    }
    
    return render(this.template, data)
  }
}