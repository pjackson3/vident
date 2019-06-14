# Vident
## About
Vident (latin for "they see") is a component library for jQuery. It implements the [mustache](https://npmjs.com/package/mustache) templating engine. Under the hood, it uses a small client-side router called [page](https://npmjs.com/package/page). You will not need to interact with page to use this library. The router included wraps around it and should suffice for most purposes.

## Contributing
Currently the most needed area is the documentation. Another thing I would like to add in later versions is a virtual DOM (like the ones in React and Angular).

## Example
```(html)
/* index.html */
<!DOCTYPE html>
<html>
<head>
<title></title>
</head>
<body>
<div id="app">
</div>
<script src="path/to/compiled/script.js">
</script>
</body>
</html>
```

```(javascript)
// main.js
import jQuery from "jquery"
import { setup } from "vident"
import template from "./template.mustache"

const $ = setup(jQuery)

const component = $().createComponent({
  template: template
})

$("#app").renderComponent({
  component: component,
  data: {data: "Hello World!"}
})
```

```(html)
/* template.mustache */
<h1>{{data}}</h1>
```

This will render the component onto the div with an id of app
