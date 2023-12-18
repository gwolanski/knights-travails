    //This function creates an array variable, moveOptions, which contains every legal move that a knight can make. 
    function findMoveOptions() {
    //Spaces a knight can travel on the x-plane & y-plane.  
        let xOptions = [-2, -2, -1, -1, 1, 1, 2, 2];
        let yOptions = [-1, 1, -2, 2, -2, 2, -1, 1];

        const moveOptions = [];

        for (let i = 0; i < xOptions.length; i++) {
            moveOptions.push([xOptions[i], yOptions[i]]);  
        }

        return moveOptions;
    }