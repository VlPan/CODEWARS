function onlyDuplicates(str) {
    var arr = str.split('');
    for (var dup = [], i = 0; i < arr.length; i++) {
        var n = arr[i]
        if (arr.indexOf(n, i + 1) >= 0 || dup.indexOf(n) >= 0) {
          dup.push(n)
        }
      }
    
    return dup.join('');
  }

  console.log(onlyDuplicates('abccdefee'));