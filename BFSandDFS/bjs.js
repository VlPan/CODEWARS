
function User ( id , name, isSeller, friendIds) {
    this.id = id;
    this.name = name;
    this.isSeller = isSeller;
    this.friendIds = friendIds;
}

var users = [
    new User(1, 'VlPan', false, [2,3,7]),
    new User(2, 'Artem', false, [1,4,5,6,3]),
    new User(3, 'Vika', false, [7,8,1,2]),
    new User(4, 'Egor', true, [2,5]),
    new User(5, 'Roma', false, [4,2,8]),
    new User(6, 'Sahsa', true, [2]),
    new User(7, 'Anton', false, [1,3,8]),
    new User(8, 'Dima', true, [3,5,7]),
]

console.log('BFS');

function bfsFindSeller (user) {

    var visitedIds = [];
    var listToExplore = [ user ];
    var sellers = [];
    visitedIds.push(user.id);
    count = 0;

    while(listToExplore.length > 0) {
        var user = listToExplore.shift();
        if(user.isSeller){
            sellers.push(user)
        }
        for(var i = 0; i < user.friendIds.length; i++) {
            if(visitedIds.indexOf(user.friendIds[i]) === -1) { // Not visited yet
                visitedIds.push(user.friendIds[i]);
                listToExplore.push(users.find(el => el.id === user.friendIds[i]));
            }
        }

        console.log(visitedIds);
    }

    return sellers;
}

console.log(bfsFindSeller(users[4]));




console.log('DFS');

function dfsFindSeller(user){
    var visitedIds = [];
    var listToExplore = [ user ];
    var sellers = [];
    visitedIds.push(user.id);
    count = 0;


    while(listToExplore.length > 0) {
        var user = listToExplore.pop();
       
        if(user.isSeller){
            sellers.push(user)
        }   
        for(var i = 0; i < user.friendIds.length; i++) {
            if(visitedIds.indexOf(user.friendIds[i]) === -1) { // Not visited yet
                visitedIds.push(user.friendIds[i]);
                listToExplore.push(users.find(el => el.id === user.friendIds[i]));
            }
        }
        console.log(visitedIds);
    }

    return sellers;
}
console.log(dfsFindSeller(users[4]));