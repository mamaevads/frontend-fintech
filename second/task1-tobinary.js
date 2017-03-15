function toBinary(num){    
	function toBinaryHelper(str, num) {
        if (num==0) return str;
        else return toBinaryHelper(num%2 + str,(num-num%2)/2); 
    }
	return toBinaryHelper("",num)
}
