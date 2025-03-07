const util = require('./util')
const mapKeys = require('lodash.mapkeys')

const pkgFile = 'package.json'

// Rename key in object without changing its position
function renameKey(obj, prevKey, nextKey) {
  return mapKeys(obj, (_, key) => (key === prevKey ? nextKey : key))
}

// Prefix script name with _ to disable it
function disable(name) {
  return `_${name}`
}

function renameScript(pkg, prevName, nextName) {
  const newPkg = { ...pkg }
  newPkg.scripts = renameKey(pkg.scripts, prevName, nextName)
  return newPkg
}

function enableScript(pkg, name) {
  return renameScript(pkg, disable(name), name)
}

function disableScript(pkg, name) {
  return renameScript(pkg, name, disable(name))
}

function enableAndSave() {
  const pkg = util.loadJsonFileSync(pkgFile)
  const newPkg = enableScript(enableScript(pkg, 'postinstall'), 'install')
  util.writeJsonFileSync(pkgFile, newPkg)
}

function disableAndSave() {
  const pkg = util.loadJsonFileSync(pkgFile)
  const newPkg = disableScript(disableScript(pkg, 'postinstall'), 'install')
  util.writeJsonFileSync(pkgFile, newPkg)
}

module.exports = {
  enableScript,
  disableScript,
  enableAndSave,
  disableAndSave,
}
