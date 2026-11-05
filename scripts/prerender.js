// Renders the app to static HTML and writes it into dist/index.html,
// so the page has real content before (or without) JavaScript.
import fs from 'node:fs'
import path from 'node:path'
import {fileURLToPath, pathToFileURL} from 'node:url'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const htmlPath = path.join(root, 'dist/index.html')
const serverDir = path.join(root, 'dist-server')

const {render} = await import(pathToFileURL(path.join(serverDir, 'entry-server.js')).href)

const template = fs.readFileSync(htmlPath, 'utf-8')
if (!template.includes('<!--app-html-->')) {
  throw new Error('Placeholder <!--app-html--> not found in dist/index.html')
}

fs.writeFileSync(htmlPath, template.replace('<!--app-html-->', render()))
fs.rmSync(serverDir, {recursive: true, force: true})
console.log('Prerendered dist/index.html')
