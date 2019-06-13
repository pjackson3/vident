import { Component } from "./index.js"
import { render } from "mustache"

it("should render without crashing", () => {
  const templateToRenderIn = "<h1>{{> component})}}</h1>"
  const componentTemplate = "{{data}}"
  const component = new Component(componentTemplate, (data) => {
    console.log("Prerender")
    return data
  })
  render(templateToRenderIn, {component: component.render({})})
})

