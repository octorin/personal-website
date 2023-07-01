// next.config.js
//from: https://www.taeny.dev/javascript/nextjs-with-deployment-platform#b4606b83f92e430bbcd4878ec6830a32
const debug = process.env.NODE_ENV !== 'production'
const name = 'small-magic-project-deployment'

module.exports = {
  assetPrefix: !debug ? `/${personal-website}/` : '',
}
