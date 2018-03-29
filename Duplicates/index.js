function duplicates(arr) {
    let res = [];
    for(var i = 0; i < arr.length; i++){
        for(y = i + 1; y < arr.length; y++){
            if(arr[i] === arr[y] ) {
                if(res.indexOf(arr[i]) === -1 ) res.push(arr[i])
            }
        }
    }
    return res;
}


///
function duplicates(arr) {
    for (var dup = [], i = 0; i < arr.length; i++) {
      var n = arr[i]
      if (arr.indexOf(n, i + 1) >= 0 && dup.indexOf(n) < 0) {
        dup.push(n)
      }
    }
    
    return dup
  }


function findDup( arr ){
 
    for(var i = 0; i < arr.length; i++){
        var n = arr[i];
        if(arr.indexOf(n, i + 1) >= 0) return n; 
    }
    
}

console.log(findDup([1,1,1]));
