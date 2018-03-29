function findChildren(dancingBrigade){
    let res = [];
    dancingBrigade = dancingBrigade.toLowerCase().split('').sort((a, b) =>{ 
        return a.localeCompare(b); 
    }).join('');
    res[0] = dancingBrigade[0].toUpperCase();
    for(let i = 1; i < dancingBrigade.length; i++){
        if(dancingBrigade[i] !== dancingBrigade[i - 1] ) {
            res[i] = dancingBrigade[i].toUpperCase();
        }else{
            res[i] = dancingBrigade[i];
        }
    }
    return res.join('')
};
// eeEuuUwwW
console.log(findChildren('beeeEBb'));


///////////////

function findChildren(dancingBrigade){

    return dancingBrigade.split("")
                         .sort((a,b)=>a.localeCompare(b,"kf",{caseFirst:"upper"}))
                         .join("");
    
  };
