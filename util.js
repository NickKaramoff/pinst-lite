const fs = require('graceful-fs')
const stripBom = require('strip-bom')

module.exports.loadJsonFileSync = function (filePath) {
  return JSON.parse(stripBom(fs.readFileSync(filePath, 'utf-8')))
}
