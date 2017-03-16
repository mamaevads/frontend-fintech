function sum(n) { 
  let res = n;
  function getsum(m) {
	if (arguments.length) {
		res += m;
    	return getsum;
    }
	return res;
  }
  return getsum;
}
