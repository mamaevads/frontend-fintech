function intersect(arr1,arr2){
	let container = new Object();
	for (let i=0; i<arr1.length; i++){
		container[arr1[i]] = 1;
    }
	for (let i=0; i<arr2.length; i++){
		if (arr2[i] in container) console.log(arr2[i]);
    }
}
