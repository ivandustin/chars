#!/usr/bin/env node
const package  = require('./package.json')
const argparse = require('argparse')
const expand   = require('./src/expand')
const read     = require('./src/read')
const stats    = require('./src/stats')
const sort_by  = require('./src/sort-by')

function main() {
    let args   = parse()
    let files  = expand(args.file)
    let sort   = args.sort
    let array  = files.map(read)
    let result = stats(array)
    console.table(sort_by(result, sort))
}

function parse() {
    let { description, version } = package
    let parser = new argparse.ArgumentParser({ description })
    parser.add_argument('-V', '--version', { help: 'show version information and exit', action: 'version', version })
    parser.add_argument('file',            { help: 'collation files', nargs: '+' })
    parser.add_argument('--sort',          { help: 'sort by column', metavar: 'COLUMN', default: 'code' })
    return parser.parse_args()
}

main()
