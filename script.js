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
        this.predecessor = null;
    }
}

class KnightSolution {
    constructor() {
        this.root = null;
    }

    //find all possible legal moves from specified coordinates that are >= 0 and <= 7
    findLegalMoves(coordinates, options) {
        let coordinateX = coordinates.x;
        let coordinateY = coordinates.y;

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
            //Check if both new coordinates are between 0 and 7. If true, push to legalMoves.
            if (newX >= xyMin && newX <= xyMax && newY >= xyMin && newY <= xyMax) {
                legalMoves.push(newMove);
            }
        }
        console.log("legalMoves: ", legalMoves);
        return legalMoves;
    }

    //Extract only the legal moves that haven't been visited previously
    extractNewMoves(legalMoves, visited) {
        let notVisited = [];
        
        for (let i = 0; i < legalMoves.length; i++) {
            let currentLegalMove = legalMoves[i];
            console.log("currentLegalMove: ", currentLegalMove);
            let legalX = currentLegalMove[0];
            let legalY = currentLegalMove[1];
            for (let j = 0; j < visited.length; j++) {
                let currentVisited = visited[j];
                console.log("currentVisited: ", currentVisited);
                let visitedX = currentVisited[0];
                let visitedY = currentVisited[1];
                //Compare the x and y values of both legalMoves[i] and visited[j]. Only add coordinates from legalMoves to notVisited if they are unique.
                if (legalX !== visitedX && legalY !== visitedY) {
                    notVisited.push(currentLegalMove);
                }
            }
        }
        console.log("notVisited in extractNewMoves: ", notVisited)
        return notVisited;
    }

    knightMoves(startCoordinates, endCoordinates) {
        //commenting this out because I turn dequeued items into Coordinates
        let startingCoordinates = new Coordinates(startCoordinates);
        let endingCoordinates = new Coordinates(endCoordinates);

        startingCoordinates.moves = 0;

        //zero moves at start. will need to increase as knight traverses the board
        let moves = 0;


        //This portion of the code creates an array variable, moveOptions, which contains every legal move that a knight can make. 

        //spaces a knight can travel on the x-plane & y-plane
        let xOptions = [-2, -2, -1, -1, 1, 1, 2, 2];
        let yOptions = [-1, 1, -2, 2, -2, 2, -1, 1];

        //variable that will eventually store all legal knight moves
        const moveOptions = [];

        for (let i = 0; i < xOptions.length; i++) {
            moveOptions.push([xOptions[i], yOptions[i]]);  
        }
        console.log("moveOptions: ", moveOptions)

        //declare start of list as being the starting coordinates
        //commenting this out since I commented our startingCoordinates above
        if (this.root === null) {
           this.root = startCoordinates; 
        
        }
        
        //variable that will store all visited coordinates
        let visitedCoordinates = [];
        //variable that will store all coordinate nodes that need to be visited in breadth first order
        let queue = [this.root];


        //BFS logic to search the tree. As node is visited, take it out of queue and place it in visitedCoordinates.
        while (queue.length > 0) {
            let current = queue.shift();
            let currentCoordinates = new Coordinates(current);
            console.log("currentCoordinates: ", currentCoordinates);
            if (currentCoordinates.x === endingCoordinates.x && currentCoordinates.y === endingCoordinates.y) {
                return;
                //this if statement likely needs more work
            } else {
                //Find all possible legal moves from the starting point that are >= 0 and <= 7.
                let legalMoves = this.findLegalMoves(currentCoordinates, moveOptions);
                console.log("legalMoves: " + legalMoves)
            
                //Check for legal moves that have not already been added to visitedCoordinates.
                let newMoves = this.extractNewMoves(legalMoves, visitedCoordinates);
                console.log("newMoves: " + newMoves);

                //Add all moves to the queue if they are both legal and have not been visited yet.
                queue.push(...newMoves);
            }
            visitedCoordinates.push(current);

            
        }



        console.log("queue: ", queue)

        //order of operations:
        //DONE - first you take the starting coordinates, set moves to 0, push them into the queue. 
        //DONE - shift the starting coordinates out of the queue. 
        //DONE - check if it == endingCoordinates ; if true, return; if false, find legal moves, then extract newMoves
        //convert newMoves to coordinates, set moves to 1, set predecessor to starting coordinates, push into the queue;
        //one at a time, shift newMoves[i] out of the queue, check if it == endingCoordinates ; if true, return; if false, find legal moves, then extract newMoves
        //convert newMoves to coordinates, set moves to 2, set predecessor to previous node, push into queue;
        //continue this 


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
newSolution.knightMoves([1,2], [3,4]);


