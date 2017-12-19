#! /usr/bin/env node

if (require.main !== module) {
    const { rm } = require('shelljs');
    rm('-rf', `node_modules/${process.argv[process.argv.length - 1]}`)
}
