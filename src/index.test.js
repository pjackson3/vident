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
  $("<div><span /></div>").renderPage({
    page: page,
    element: "div",
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