const babelConfig = require('jst-scripts/babel');

module.exports = (api) => {
  api.cache(true);
  // console.log('api.env("production") api.env("production") api.env("production") ', api.env("production") );

  return {
    ...babelConfig(),
    "plugins": ["@babel/plugin-proposal-class-properties"]
  }
}