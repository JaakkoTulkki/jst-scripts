import React from 'react';
class Bork {
  instanceProperty = "bork";
  boundFunction = () => {
    return this.instanceProperty;
  }

  static staticProperty = "babelIsCool";
  static staticFunction = function() {
    return Bork.staticProperty;
  }
}
export function Counter(props) {
   const s = Bork.staticFunction()
  return <div>hello from counter1 {s} <span className={'color'}>{props.value}</span></div>;
}
