var nodes = [
    {
        links: [ 1 ], // node 0 is linked to node 1
        visited: false
    }, {
        links: [ 0, 2 ], // node 1 is linked to node 0 and 2
        path: [],
        visited: false
    },
    
 ];


function bfs( start ) {
    var listToExplore = [ start ];

    nodes[ start ].visited = true;

    while ( listToExplore.length > 0 ) {
        var nodeIndex = listToExplore.shift();
        nodes[ nodeIndex ].links.forEach( function( childIndex ) {
            if ( !nodes[ childIndex ].visited ) {
                nodes[ childIndex ].visited = true;
                listToExplore.push( childIndex );
            }
        } );
    }
};

const nodes = [
    {
      links: [ 1 ], // node 0 is linked to node 1
      visited: false
    }, {
      links: [ 0, 2 ], // node 1 is linked to node 0 and 2
      visited: false
    },

   ];
  
  
  const dfs = start => {
    const listToExplore = [ start ];
  
    nodes[ start ].visited = true;
  
    while ( listToExplore.length ) {
      const nodeIndex = listToExplore.pop();
  
      nodes[ nodeIndex ].links.forEach( childIndex => {
        if ( !nodes[ childIndex ].visited ) listToExplore.push( childIndex );
        nodes[ childIndex ].visited = true;
      } );
    }
  };
  
  dfs( 0 );