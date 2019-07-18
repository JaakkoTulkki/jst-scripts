// module.exports = () => ({"presets": ["@babel/preset-env", "@babel/preset-react"]});

module.exports = function iife(){
  const obj =  {"presets": ["@babel/preset-env", "@babel/preset-react"].map(require.resolve)};
  console.log(obj);
  return function () {
    return obj;
  }
}()
