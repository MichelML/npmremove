#! /usr/bin/env node

const {rm} = require('shelljs');

rm('-rf', `node_modules/${process.argv[process.argv.length -1]}`)
