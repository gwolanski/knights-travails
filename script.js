//things to keep in mind to help with efficiency:
//reduce search space each time the knight traverses closer to its end point. 
//don't revist nodes/coordinates that we've seen before.


//BFS best for finding shortest path from one point to another


class Coordinates {
    constructor([x, y]) {
        this.x = x;
        this.y = y;
        this.moves = null;
        this.next = null;
    }
}

class KnightSolution {
    constructor() {
        this.root = null;
    }

    //find all possible legal moves from specified coordinates that are >= 0 and <= 7
    findLegalMoves(coordinates, options) {
        let coordinateX = coordinates[0];
        let coordinateY = coordinates[1];

        //Minimum and maximum x & y coordinates on board. Coordinates must be >= 0 and <= 7.
        let xyMin = 0;
        let xyMax = 7;

        let legalMoves = [];

        //cycles through each move option
        for (let i = 0; i < options.length; i++) {
            //for each move option, add coordinateX + first index and coordinateY + second index
            let currentOption = options[i];
            let newX = coordinateX + currentOption[0];
            let newY = coordinateY + currentOption[1];
            let newMove = [newX, newY];
            //Check if either new coordinate is between 0 and 7. If true, push to queue.
            if (newX >= xyMin && newX <= xyMax && newY >= xyMin && newY <= xyMax) {
                legalMoves.push([newMove]);
            }
        }
        console.log("legalMoves: ", legalMoves);
        return legalMoves;
    }

    knightMoves(startCoordinates, endCoordinates) {
        let startingCoordinates = new Coordinates(startCoordinates);
        console.log("starting coordinates: ", startingCoordinates)
        let endingCoordinates = new Coordinates(endCoordinates);
        console.log("ending coordinates: ", endingCoordinates);




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



        // while (this.root >= xyMin && this.root <= xyMax) {

        // }

        // find all possible legal moves from the starting point that are >= 0 and <= 7
        this.findLegalMoves(startCoordinates, moveOptions);

        //declare start of list as being the starting coordinates
        if (this.root === null) {
           this.root = startingCoordinates; 
        }
        
        //variable that will store all visited coordinates
        let visitedCoordinates = [];
        //variable that will store all coordinate nodes that need to be visited in breadth first order
        let queue = [this.root];


        //BFS logic to search the tree. As node is visited, take it out of queue and place it in visitedCoordinates
        while (queue.length > 0) {
            let current = queue.shift();
            visitedCoordinates.push(current);
        }

        
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


