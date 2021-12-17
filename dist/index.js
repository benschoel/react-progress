function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

var useTransition = function useTransition(config) {
  var _React$useState = React.useState(0),
      progress = _React$useState[0],
      setProgress = _React$useState[1];

  var _in = function _in() {
    setProgress(1);
  };

  var out = function out() {
    setProgress(0);
  };

  return {
    "in": _in,
    out: out,
    progress: progress
  };
};

exports.useTransition = useTransition;
//# sourceMappingURL=index.js.map
