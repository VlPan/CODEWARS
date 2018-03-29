
function deepCount(a){
    let counter = 0;
    countRecursive(a);
    function countRecursive(a) {
        counter += a.length;
        for(let i = 0 ; i < a.length; i++){
            if(Array.isArray(a[i])){
                countRecursive(a[i]);
            }
        }
        return counter;
    }
    return counter;
}
////
function deepCount(a){
    return a.reduce((s,e)=>s+(Array.isArray(e)?deepCount(e):0),a.length);
}
///
function deepCount(a){
    let count = a.length;
    for (let i=0; i<a.length; i++) if (Array.isArray(a[i])) count += deepCount(a[i]);
    return count;
}