function unfold(arr){
    return arr.reduce(function (total, current) {
       return total.concat(current);
    }); 
}
