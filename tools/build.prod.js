import { rollup } from "rollup"
import { promises as fs } from "fs"
import path from "path"
import babel from "rollup-plugin-babel"

const inputOptions = {
  input: path.join(__dirname, "..", "src", "index.js"),
  plugins: [
    babel()
  ]
}

const outputOptions = {
  format: "esm",
  file: path.join(__dirname, "..", "dist", "index.js")
}

const build = async () => {
  const packageJSON = await fs.readFile(path.join(__dirname, "..", "package.json"))
  await fs.writeFile(path.join(__dirname, "..", "dist", "package.json"), packageJSON)
  
  const README = await fs.readFile(path.join(__dirname, "..", "README.md"))
  await fs.writeFile(path.join(__dirname, "..", "dist", "README.md"), README)
  
  const LICENSE = await fs.readFile(path.join(__dirname, "..", "LICENSE"))
  await fs.writeFile(path.join(__dirname, "..", "dist", "LICENSE"), LICENSE)
  
  const bundle = await rollup(inputOptions)
  
  console.log(bundle.watchFiles)
  
  const { output } = await bundle.generate(outputOptions)
  
  for (const chunkOrAsset of output) {
    if (chunkOrAsset.isAsset) {
      console.log("Asset", chunkOrAsset)
    } else {
      console.log("Chunk", chunkOrAsset.modules)
    }
  }
  
  await bundle.write(outputOptions)
}

build()
