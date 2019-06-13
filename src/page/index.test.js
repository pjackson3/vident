import { Page } from "./index.js"
import $ from "jquery"

it("should render a template", () => {
  const template = "<h1>{{content}}</h1>"
  const $element = $("<div><span /></div>").find("span")
  const testPage = new Page(template)
  testPage.render({content: "Test"}, $element)
})