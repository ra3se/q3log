/* eslint-env node */
const base = require('./jest.config.base.js')

module.exports = {
  ...base,
  projects: ['<rootDir>/packages/*/'],
  coverageDirectory: '<rootDir>/coverage/',
  collectCoverageFrom: [
    '**/*.{js,jsx,ts,tsx}',
    '!**/node_modules/**',
    '!**/vendor/**',
    '!**/jest*.js',
    '!**/_templates/**',
    '!**/lib/**',
    '!**/coverage/**',
    '!**/*spec*'
  ]
}
