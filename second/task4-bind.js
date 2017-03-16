let fakebind = function(fun, context) {
  let argBind = [].slice.call(arguments, 2);
  return function() {
    let argFun = [].slice.call(arguments);
    return fun.apply(context, argBind.concat(argFun));
  };
};
