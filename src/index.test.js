import { setup } from "./index.js"
import jQuery from "jquery"

it("should setup without crashing", () => {
  setup(jQuery)
})

it("should createPage without crashing", () => {
  const $ = setup(jQuery)
  $().createPage({
    template: "<h1>{{content}}</h1>",
    prerender: data => {data}
  })
})

it("should createPage without options and not crash", () => {
  const $ = setup(jQuery)
  $().createPage()
})

it("should renderPage without crashing", () => {
  const $ = setup(jQuery)
  const page = $().createPage()
  $("<div><span /></div>").find("span").renderPage({
    page: page,
    data: {data: "testing testing..."}
  })
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

// it("should route without crashing", () => {
//   const $ = setup(jQuery)
//   const page = $().createPage()
//   $().route({
//     page: page
//   })
// })