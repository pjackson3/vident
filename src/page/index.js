import mustache from "mustache"

export class Page {
  constructor(template, $element, prerender = props => props ) {
    this.template = template
    this.prerender = prerender
    mustache.parse(this.template)
  }
  render(props, $element) {
    props = this.prerender(props)
    const text = mustache.render(this.template, props)
    $element.html(text)
  }
}