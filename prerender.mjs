import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const toAbsolute = (p) => path.resolve(__dirname, p)

// Template gerado pelo build de client (com assets hasheados e CSS linkado)
const template = fs.readFileSync(toAbsolute('dist/index.html'), 'utf-8')

// SSR bundle compilado pelo build --ssr
const { render } = await import('./dist/server/entry-server.js')

// Rotas a pré-renderizar — adicionar aqui quando houver páginas de cidade
const routesToPrerender = ['/']

for (const url of routesToPrerender) {
  const appHtml = render(url)
  const html = template.replace('<!--app-html-->', appHtml)

  const outFile = url === '/' ? 'dist/index.html' : `dist${url}/index.html`
  const outDir = path.dirname(toAbsolute(outFile))

  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true })
  }

  fs.writeFileSync(toAbsolute(outFile), html)
  console.log('✅ Pre-rendered:', url)
}

console.log('🚀 Pre-rendering complete — HTML visível para Bing, AI crawlers e social scrapers.')
