var maze = [[1,1,1,1,1,1,1],
            [1,0,0,0,0,0,3],
            [1,0,1,0,1,0,1],
            [0,0,1,0,0,0,1],
            [1,0,1,0,1,0,1],
            [1,0,0,0,0,0,1],
            [1,2,1,0,1,0,1]];
function mazeRunner(maze, directions) {
    position = {x: 0, y: 0};
    for(let i = 0; i < maze.length; i++){
        for(let j = 0; j < maze.length; j++){
            if(maze[i][j] === 2) {
                position.y = i;
                position.x = j;
            }
        }
    }
    for(let i = 0; i < directions.length; i++){
        switch (directions[i]){
            case 'N': {position.y -- ; break}
            case 'S': {position.y ++ ; break}
            case 'W': {position.x -- ; break}
            case 'E': {position.x ++ ; break}
        }

        if(!maze[position.y] || !maze[position.x]){
            return 'Dead';
        }

        switch ((maze[position.y][position.x])){
            case 1: {return 'Dead';}
            case undefined: {return 'Dead'}
            case 0: continue;
            case 3: return 'Finish';
        }
    }
    return "Lost";
}
console.log(mazeRunner(maze, ["N","N","N","N","N","E","E","S","S","S","S","S","S"]));
