//things to keep in mind to help with efficiency:
//reduce search space each time the knight traverses closer to its end point. 
//don't revist nodes/coordinates that we've seen before.
    //create a variable called that stores all the visited coordinates, perhaps an array?
    let visitedCoordinates = ["0,0"];

//BFS best for finding shortest path from one point to another


class Coordinates {
    constructor([x, y]) {
        this.x = x;
        this.y = y;
        this.next = null;
    }
}

class KnightSolution {
    constructor() {
        this.head = null;
    }



    knightMoves(startCoordinates, endCoordinates) {
        let startingCoordinates = new Coordinates(startCoordinates);
        console.log("starting coordinates: ", startingCoordinates)
        let endingCoordinates = new Coordinates(endCoordinates);
        console.log("ending coordinates: ", endingCoordinates);
        // if (this.head === null) {
            
        // }
        




        //Minimum and maximum x & y coordinates. Coordinates must be >= 0 and <= 7.
        let xMin = 0;
        let yMin = 0;
        let yMax = 7;
        let xMax = 7;



        //This portion of the code creates an array variable, moveOptions, which contains every legal move that a knight can make. 

        //spaces a knight can travel on the x-plane & y-plane
        let xOptions = [-2, -2, -1, -1, 1, 1, 2, 2];
        let yOptions = [-1, 1, -2, 2, -2, 2, -1, 1];

        //variable that will eventualyl store all legal knight moves
        const moveOptions = [];

        for (let i = 0; i < xOptions.length; i++) {
            moveOptions.push([xOptions[i], yOptions[i]]);  
        }
        console.log("moveOptions: ", moveOptions);



        
        //zero moves at start. will need to increase as knight traverses the board
        let moves = 0;

        //maybe first you would build the full list that contains all possible moves starting from a specified starting point
        //then, use BFS to search through the list until it finds all instances ending at the specified ending point
        //or we may need to reassess to see if we can get big o to be smaller

        //starting from startCoordinates, search for all children of that node.
        //increase moves counter
        //once those children have been searched for endCoordinates, search for all children of that node.
        //increase moves counter

    }
}

let newSolution = new KnightSolution();
newSolution.knightMoves([0,0], [1,2]);


