'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  PORT: 80,
  API_HOST: '"http://app.ethorus.com?"',
  debug: true,
})
