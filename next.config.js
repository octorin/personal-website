// next.config.js
const debug = process.env.NODE_ENV !== 'production'
const name = 'small-magic-project-deployment'

module.exports = {
  assetPrefix: !debug ? `/${personal-website}/` : '',
}
