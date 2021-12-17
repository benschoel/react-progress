function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

var useTransition = function useTransition() {
  var _React$useState = React.useState(1),
      val = _React$useState[0],
      setVal = _React$useState[1];

  var foo = function foo() {
    return setVal(val * 2);
  };

  return {
    val: val,
    foo: foo
  };
};

exports.useTransition = useTransition;
//# sourceMappingURL=index.js.map
