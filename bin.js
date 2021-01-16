#!/usr/bin/env node
const sade = require('sade')
const { enableAndSave, disableAndSave } = require('./index')

const cli = sade('pinst', true)
  .version(require('./package.json').version)
  .describe('Enable or disable npm postinstall hook')
  .option('--enable, -e', 'Enable postinstall hook')
  .option('--disable, -d', 'Disable postinstall hook')
  .option('--silent, -s')
  .example('--enable')
  .action((opts) => {
    if (opts.enable) {
      if (!opts.silent) console.log('pinst enable')
      return enableAndSave()
    }

    if (opts.disable) {
      if (!opts.silent) console.log('pinst disable')
      return disableAndSave()
    }

    // No known flag provided
    cli.help()
    process.exit(1)
  })

cli.parse(process.argv)
