const util = require('./util')
const writeJsonFile = require('write-json-file')
const {
  enableScript,
  enableAndSave,
  disableScript,
  disableAndSave,
} = require('./index')

const enabledPkg = {
  scripts: {
    start: '',
    postinstall: 'postinstall',
    install: 'install', //  Alias for postinstall
  },
}

const disabledPkg = {
  scripts: {
    start: '',
    _postinstall: 'postinstall',
    _install: 'install', // Alias for postinstall
  },
}

const pkgFile = 'package.json'

test('enableScript', () => {
  expect(
    enableScript(enableScript(disabledPkg, 'postinstall'), 'install')
  ).toEqual(enabledPkg)
})

test('enableAndSave', () => {
  util.loadJsonFileSync = jest.fn(() => disabledPkg)
  writeJsonFile.sync = jest.fn()

  enableAndSave(pkgFile)
  expect(util.loadJsonFileSync).toHaveBeenCalledWith(pkgFile)
  expect(writeJsonFile.sync).toHaveBeenCalledWith(pkgFile, enabledPkg, {
    detectIndent: true,
  })
})

test('disableScript', () => {
  expect(
    disableScript(disableScript(enabledPkg, 'postinstall'), 'install')
  ).toEqual(disabledPkg)
})

test('disableAndSave', () => {
  util.loadJsonFileSync = jest.fn(() => enabledPkg)
  writeJsonFile.sync = jest.fn()

  disableAndSave(pkgFile)
  expect(util.loadJsonFileSync).toHaveBeenCalledWith(pkgFile)
  expect(writeJsonFile.sync).toHaveBeenCalledWith(pkgFile, disabledPkg, {
    detectIndent: true,
  })
})
