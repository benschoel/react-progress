import React from 'react';

const useTransition = () => {
  const [val, setVal] = React.useState(1);

  const foo = () => setVal(val * 2);

  return {
    val,
    foo
  };
};

export { useTransition };
//# sourceMappingURL=index.modern.js.map
