const path = require('path')
const base = require('../../jest.config.base.js')
const pack = require('./package')
const basename = path.basename(__dirname)

module.exports = {
  ...base,
  displayName: pack.name,
  name: pack.name,
  rootDir: '../..',
  testMatch: [`<rootDir>/packages/${basename}/**/*.spec.ts`]
}
