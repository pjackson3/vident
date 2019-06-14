import { setup } from "./index.js"
import jQuery from "jquery"

it("should setup without crashing", () => {
  setup(jQuery)
})

it("should createComponent without crashing", () => {
  const $ = setup(jQuery)
  $().createComponent({
    template: "<h1>{{content}}</h1>",
    prerender: data => {data}
  })
})

it("should createComponent without options and not crash", () => {
  const $ = setup(jQuery)
  $().createComponent()
})

it("should renderComponent without crashing", () => {
  const $ = setup(jQuery)
  const component = $().createComponent()
  $("<div><span /></div>").find("span").renderComponent({
    component: component,
    data: {data: "testing testing..."}
  })
})

it("should create a route without crashing", () => {
  const $ = setup(jQuery)
  const component = $().createComponent()
  $("<div><span /><div>").find("span").createRoute(component)
})

it("should load routes without crashing", () => {
  const $ = setup(jQuery)
  const component = $().createComponent()
  const element = $("<div><span /></div>").find("span")
  element.createRoute(component)
  element.loadRoutes()
})

it("should route without crashing", () => {
  const $ = setup(jQuery)
  const component = $().createComponent()
  const element = $("<div><span /></div>").find("span")
  element.createRoute(component)
  element.loadRoutes()
  element.route("/")
})