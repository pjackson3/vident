import mustache from "mustache"

export class Page {
  constructor(template, $element, prerender=false) {
    this.template = template
    if (prerender) {
      this.prerender = prerender
    }
    mustache.parse(this.template)
  }
  render(props, $element){
    if (this.prerender){
      props = this.prerender(props)
    }
    const text = mustache.render(this.template, props)
    $element.html(text)
  }
}