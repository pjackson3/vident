// eslint-disable-all no-console

import { watch } from "rollup"
import babel from "rollup-plugin-babel"
import path from "path"
import chalk from "chalk"

export const inputOptions = {
  input: path.join(__dirname, "..", "src", "index.js"),
  plugins: [
    babel()
  ]
}

export const watchOptions = {
  ...inputOptions,
  output: {
    format: "esm",
    file: path.join(__dirname, "..", "dist", "index.js")
  },
  clearScreen: true,
  exclude: path.join(__dirname, "..", "node_modules", "**")
}

const watcher = watch(watchOptions)

watcher.on("event", event => {
  switch(event.code) {
    case "START":
      console.log(chalk.green("watcher (re)started!"))
      break
    
    case "BUNDLE_START":
      console.log(chalk.blue("starting another bundle..."))
      break
    
    case "BUNDLE_END":
      console.log(chalk.green("bundle succeeded!"))
      break
    
    case "END":
      console.log(chalk.green("finished all bundles! :)"))
      break
    
    case "ERROR":
      console.log(chalk.yellow("there was an error!"))
      console.log(chalk.yellow(event.error))
      break
    
    case "FATAL":
      console.log(chalk.red("there was a fatal error!!!!! :("))
      console.log(chalk.red(event.error))
      break
  }
})
