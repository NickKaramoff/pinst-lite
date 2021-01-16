const detectIndent = require('detect-indent')
const fs = require('graceful-fs')
const stripBom = require('strip-bom')

module.exports.loadJsonFileSync = function (filePath) {
  return JSON.parse(stripBom(fs.readFileSync(filePath, 'utf-8')))
}

module.exports.writeJsonFileSync = function (filePath, data) {
  let indent = '\t'
  let trailingNewline = '\n'

  try {
    const file = fs.readFileSync(filePath, 'utf8')
    if (!file.endsWith('\n')) {
      trailingNewline = ''
    }

    indent = detectIndent(file).indent
  } catch (error) {
    if (error.code !== 'ENOENT') {
      throw error
    }
  }

  const json = JSON.stringify(data, undefined, indent)

  return fs.writeFileSync(filePath, `${json}${trailingNewline}`)
}
