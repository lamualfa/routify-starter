const fs = require('fs')
const { tossr } = require('tossr')

const script = 'dist/build/main.js'
const template = 'dist/__app.html'

console.log('dir')
console.log(fs.readdirSync(__dirname))

exports.handler = async (event, context) => {
    const body = await tossr(template, script, event.path, { inlineDynamicImports: true })
    return { statusCode: 200, body: body + '\n<!--ssr rendered-->' }
}